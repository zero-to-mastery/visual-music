import p5 from 'p5';
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';

import { downloadVisualEnd } from '../store/actions/downloadActions';
import { getScreenshotUrl } from '../store/actions/screenshotActions';
import { drawOne } from './draw/drawOne';
export default function sketch(p) {
    // initial song and canvas props set
    let song, fft, amplitude, volume, canvas;
    let playPressed = false;
    let width = 900;
    let height = 500;
    // initial jump functionalty set
    let prevCueTime, newCueTime, jumpedSong;
    // initial download visual set
    let audioCtx, sourceNode, dest, canvasStream, audioStream, mediaRecorder;
    let recordedChunks = [];
    let audio = document.getElementById('audio');

    function initAudioStream(evt) {
        if (!audioCtx) {
            // Create a new audio context
            audioCtx = new AudioContext();
            // create a stream from the AudioContext
            dest = audioCtx.createMediaStreamDestination();
            audioStream = dest.stream;
            // connect the audio element's output to the stream
            sourceNode = audioCtx.createMediaElementSource(audio);
            sourceNode.connect(dest);
        }
    }

    function recordStream() {
        if (canvasStream) {
            mediaRecorder.resume();
        } else {
            // Capture canvas stream (visualization)
            canvasStream = p.canvas.captureStream(60);
            // Add audio track to the stream
            canvasStream.addTrack(audioStream.getAudioTracks()[0]);
            // Initialize the array for the data
            recordedChunks = [];
            // Start recording
            mediaRecorder = new MediaRecorder(canvasStream);
            mediaRecorder.start();
            // Save data
            mediaRecorder.ondataavailable = handleDataAvailable;
            // Stop mediaRecorder and reset audio when the song end
            audio.onended = endRecord;
        }
    }

    function pauseAllMedia() {
        audio.pause();
        song.pause();
        if (mediaRecorder.state === 'recording') {
            mediaRecorder.pause();
        }
    }

    function handleDataAvailable(event) {
        // Add data from the stream to an array
        if (event.data.size > 0) {
            recordedChunks.push(event.data);
        }
    }

    function endRecord() {
        mediaRecorder.stop();
        audio.pause();
        audio.currentTime = 0;
        canvasStream = null;
        playPressed = false;
    }

    function download() {
        // Download stream (webm file) if data available
        if (recordedChunks.length > 0) {
            var blob = new Blob(recordedChunks, {
                type: 'video/webm'
            });
            var url = URL.createObjectURL(blob);
            let a = document.createElement('a');
            document.body.appendChild(a);
            a.style = 'display: none';
            a.href = url;
            a.download = 'visualization.webm';
            a.click();
            window.URL.revokeObjectURL(url);
        }
    }

    p.setup = function() {
        // Canvas setup
        p.background(7, 11, 21);
        canvas = p.createCanvas(width, height);
        fft = new p5.FFT(0.9, 256); // for the waves
        amplitude = new p5.Amplitude(); // for the ellipses
        p.noFill();
        p.stroke(0, 100);
        initAudioStream();
    };

    function loadingError() {
        console.log('Oops, song not recognize!');
    }

    //Custom redraw that will trigger upon state change
    p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
        playPressed = props.playPressed;
        // Function that get called when a song is loaded
        function loaded() {
            newCueTime = parseInt(props.cueTime);
            volume = props.volume;
            song.setVolume(parseFloat(volume));

            // Restart song where it was stopped if the user jump the song
            song.playMode('restart');
            // Jump song to desired time
            if (newCueTime && newCueTime !== prevCueTime) {
                // When jump func is called the song start playing automatically
                song.jump(newCueTime);
                audio.currentTime = newCueTime;
                prevCueTime = newCueTime;
                jumpedSong = true;
            } else {
                jumpedSong = false;
            }

            // Pause song if song was on pause before the jump function was called
            if (!playPressed && jumpedSong) {
                pauseAllMedia();
            }

            p.togglePlaying(song);
        }

        //We need to resize canvas
        //and set width property to new width
        //so drawing will base on this new width
        if (props.isFullSize) {
            width = p.windowWidth + 100;
            height = p.windowHeight + 100;
        } else {
            width = props.canvasWidth;
            height = props.canvasHeight;
        }
        if (width !== p.width || height !== p.height) {
            let beforeResizeCanvas = p.get();
            p.resizeCanvas(width, height);
            mediaRecorder &&
                p.copy(
                    beforeResizeCanvas,
                    0,
                    0,
                    beforeResizeCanvas.width,
                    beforeResizeCanvas.height,
                    0,
                    0,
                    width,
                    height
                );
        }
        // Check for new uploaded song
        if (song) {
            if (song.isLoaded()) {
                // Reinitialize song if a new file is uploaded
                if (song.file !== props.uploadedSong) {
                    song.dispose();
                    song = p.loadSound(
                        props.uploadedSong,
                        loaded,
                        loadingError
                    );
                    recordedChunks = [];
                    canvasStream = null;
                }

                loaded();
            }
        } else {
            // Check if song is uploaded on firebase
            if (props.uploadedSong) {
                // Erase recorded data from the previous recorded song
                recordedChunks = [];
                canvasStream = null;

                // Add audio source
                if (props.blob) audio.src = URL.createObjectURL(props.blob);

                // Load song into p5 when song is uploaded on firebase
                song = p.loadSound(props.uploadedSong, loaded, loadingError);
            }
        }

        if (props.downloadVisual) {
            download();
            props.dispatch(downloadVisualEnd());
        }

        if (props.takeScreenshot) {
            let screenshotUrl = p.canvas.toDataURL();
            props.dispatch(getScreenshotUrl(screenshotUrl));
        }
    };

    p.togglePlaying = function(song) {
        // Use audio.paused instead of song.isPlaying. isPlaying is not always reliable
        if (playPressed && audio.paused) {
            // Start audio to be recorded
            audio.play();
            // Start visualization base on the song
            song.play();
            // Jump if the user clicked in the progress slider
            song.jump(audio.currentTime);
            // Record audio + visualization
            recordStream();
        } else if (!playPressed && !audio.paused) {
            if (!song.isPlaying()) {
                // P5 bug: sometime p5 show isPlaying = false instead of true
                song.play();
                song.pause();
            }
            pauseAllMedia();
        }
    };

    p.draw = function() {
        drawOne({ p, fft, canvas, amplitude });
    };
}
