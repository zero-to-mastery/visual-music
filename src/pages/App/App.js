import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import Error from '../../components/Error/Error';
// import SoundPlayer from '../../components/SoundPlayer/SoundPlayer.component';
import Visualizer from '../../components/Visualizer/Visualizer.component';
import PlayerBar from '../../components/PlayerBar/PlayerBar';
import classes from './App.module.scss';

import HamburgerToggle from '../../components/HamburgerToggle/HamburgerToggle';
import VisualPanel from '../../components/VisualPanel/VisualPanel';
import ScreenshotModal from '../../components/ScreenshotModal/ScreenshotModal';

export default function App({ song }) {
    // States
    const [uploadedSong, setUploadedSong] = useState(null);
    const [playPressed, setPlayPressed] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(null);
    const [currentTime, setCurrentTime] = useState(null);
    const [cueTime, setCueTime] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const [takeScreenshot, setTakeScreenshot] = useState(false);
    const [togglePanel, setTogglePanel] = useState(false);
    const [songEnded, setSongEnded] = useState(false);
    const [blob, setBlob] = useState(null);

    const { downloadState } = useSelector(state => state.download);
    const { screenshotUrl } = useSelector(state => state.screenshot);

    // Update state when a new song is uploaded
    useEffect(() => {
        setUploadedSong(song);
        setBlob(song.blob);
        setSongEnded(false);
        setPlayPressed(false);
        setIsPlaying(false);
    }, [song]);

    /********************************************
        Handles changing of volume state upon
        slider interaction. State changes are sent to
        sketch file adjusting the sound's actual
        volume to change ellipse diameter on redraw.
    ********************************************/
    const onVolumeChange = event => {
        setVolume(event.target.value);
    };

    /*********************************************
        Handles toggling of pause/play button.
        Used to monitor if the user wants to pause/play
        the loaded sound. State changes are sent to
        sketch file which executes a .pause() or .play()
        command.
    *********************************************/
    const onPlayPress = event => {
        if (uploadedSong) {
            setPlayPressed(!playPressed);
        } else {
            alert('No file loaded');
        }
    };

    const onAudioPlay = () => {
        setIsPlaying(true);
    };

    const onSongEnd = () => {
        setIsPlaying(false);
        setPlayPressed(false);
        setSongEnded(true);
    };

    // Set duration from audio event
    const handleMetadata = event => {
        const duration = event.currentTarget.duration;
        setDuration(duration);
    };

    // Set currentTime from audio event (onTimeUpdate)
    const onTimeChange = e => {
        setCurrentTime(e.target.currentTime);
    };

    // Set cue time when users click on the progress slider (/PlayerBar.js)
    const onCueTimeChange = e => {
        setCueTime(e.target.value);
    };

    /********************************************
        Handle hamburger toggle callback. When 
        hamburger toggle's state changed, we need
        to set togglePanel state
    *********************************************/
    const onTogglePanel = toggleState => {
        setTogglePanel(toggleState);
    };

    // Sent info to visualizer.js then sketch.js to take a screenshot
    const onScreenshotClick = () => {
        setTakeScreenshot(true);
    };

    return (
        <div className={classes.pageContainer}>
            <div className={classes.visualmusic}>
                <div className={classes.visualContainer}>
                    <div
                        className={`${classes.visualmusic} ${
                            togglePanel ? classes.shrink : ''
                        }`}
                    >
                        <div className={classes.hamburger}>
                            <HamburgerToggle
                                initToggle={togglePanel}
                                onClick={onTogglePanel}
                            />
                        </div>
                        <Visualizer
                            volume={volume}
                            takeScreenshot={takeScreenshot}
                            playPressed={playPressed}
                            uploadedSong={uploadedSong && uploadedSong.url}
                            blob={blob}
                            downloadVisual={songEnded && downloadState}
                            cueTime={cueTime}
                        />
                    </div>
                    <div
                        className={`${classes.visualPanel} ${
                            togglePanel ? classes.slideIn : ''
                        }`}
                    >
                        <VisualPanel />
                    </div>
                </div>
                <div>
                    <audio
                        id="audio"
                        onEnded={onSongEnd}
                        onLoadedMetadata={handleMetadata}
                        onPlay={onAudioPlay}
                        onTimeUpdate={onTimeChange}
                    ></audio>
                </div>
                <div className={classes.bar}>
                    <PlayerBar
                        currentTime={currentTime}
                        volume={volume}
                        onVolumeChange={onVolumeChange}
                        onScreenshotClick={onScreenshotClick}
                        onPlayPress={onPlayPress}
                        playPressed={playPressed}
                        isPlaying={isPlaying}
                        uploadedSong={uploadedSong}
                        duration={duration}
                        songEnded={songEnded}
                        onCueTimeChange={onCueTimeChange}
                    />
                </div>
            </div>
            <ScreenshotModal screenshotUrl={screenshotUrl} />
        </div>
    );
}
