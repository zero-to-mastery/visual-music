import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Visualizer from '../../components/Visualizer/Visualizer.component';
import PlayerBar from '../../components/PlayerBar/PlayerBar';
import classes from './App.module.scss';

import HamburgerToggle from '../../components/HamburgerToggle/HamburgerToggle';
import VisualPanel from '../../components/VisualPanel/VisualPanel';

import { setCurrentTimeFormated, setDurationFormated, setPlayPressed } from '../../store/actions/songActions';
import { getTimeFormated } from '../../utils/timeConversion';

export default function App() {
    // States
    const [uploadedSong, setUploadedSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(null);
    const [cueTime, setCueTime] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const [togglePanel, setTogglePanel] = useState(false);
    const [songEnded, setSongEnded] = useState(false);
    const [blob, setBlob] = useState(null);

    const downloadState = useSelector(state => state.download.downloadState);

    const songUrl  = useSelector(state => state.song.url);
    const songName = useSelector(state => state.song.name);
    const songBLob = useSelector(state => state.song.blob);
    const songCurrentTimeFormated = useSelector(state => state.song.currentTime);
    const songDurationFormated = useSelector(state => state.song.duration);
    const isPlayPressed = useSelector(state => state.song.isPlayPressed);

    const dispatch = useDispatch();

    // Effects
    useEffect(() => {
        setUploadedSong({url: songUrl, name: songName, blob: songBLob});
        setBlob(songBLob);
        setSongEnded(false);
        setIsPlaying(false);
    }, [songUrl, songName, songBLob]);

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
            dispatch(setPlayPressed(!isPlayPressed));
        } else {
            alert('No file loaded');
        }
    };

    const onAudioPlay = () => {
        setIsPlaying(true);
    };

    const onSongEnd = () => {
        setIsPlaying(false);
        dispatch(setPlayPressed(false));
        setSongEnded(true);
    };

    // Set duration from audio event
    const handleMetadata = event => {
        const duration = getTimeFormated(event.currentTarget.duration);
        dispatch(setDurationFormated(duration))

    };

    // Set currentTime from audio event (onTimeUpdate)
    const onTimeChange = (songCurrentTime,e) => {
        const currentTime = getTimeFormated(e.target.currentTime);
        if(!songCurrentTime || songCurrentTime !== currentTime){
            dispatch(setCurrentTimeFormated(currentTime));
        }
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
                            playPressed={isPlayPressed}
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
                        onTimeUpdate={(event) => onTimeChange(songCurrentTimeFormated, event)}
                    ></audio>
                </div>
                <div className={classes.bar}>
                    <PlayerBar
                        currentTimeFormated={songCurrentTimeFormated}
                        currentTime={currentTime}
                        volume={volume}
                        onVolumeChange={onVolumeChange}
                        onPlayPress={onPlayPress}
                        playPressed={isPlayPressed}
                        isPlaying={isPlaying}
                        uploadedSong={uploadedSong}
                        duration={songDurationFormated}
                        songEnded={songEnded}
                        onCueTimeChange={onCueTimeChange}
                    />
                </div>
            </div>
        </div>
    );
}
