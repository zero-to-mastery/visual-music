import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Visualizer from '../../components/Visualizer/Visualizer.component';
import PlayerBar from '../../components/PlayerBar/PlayerBar';
import classes from './App.module.scss';

import HamburgerToggle from '../../components/HamburgerToggle/HamburgerToggle';
import VisualPanel from '../../components/VisualPanel/VisualPanel';
import ScreenshotModal from '../../components/ScreenshotModal/ScreenshotModal';
import Error from '../../components/Error/Error';
import Success from '../../components/Success/Success';

export default function App({ song }) {
    // Local States
    const [uploadedSong, setUploadedSong] = useState(null);
    const [playPressed, setPlayPressed] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(null);
    const [currentTime, setCurrentTime] = useState(null);
    const [cueTime, setCueTime] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const [togglePanel, setTogglePanel] = useState(false);
    const [songEnded, setSongEnded] = useState(false);
    const [blob, setBlob] = useState(null);
    // Redux States
    const { downloadState } = useSelector(state => state.download);
    const {
        screenshotUrl,
        takeScreenshot,
        screenshotSuccess,
        screenshotError
    } = useSelector(state => state.screenshot);

    // Update state when a new song is uploaded
    useEffect(() => {
        setUploadedSong(song);
        setBlob(song.blob);
        setSongEnded(false);
        setPlayPressed(false);
        setIsPlaying(false);
    }, [song]);

    const onSongEnd = () => {
        setIsPlaying(false);
        setPlayPressed(false);
        setSongEnded(true);
    };

    return (
        <>
            <div className={classes.pageContainer}>
                <div className={classes.visualmusic}>
                    <div className={classes.visualContainer}>
                        <div
                            className={`${classes.visualmusic} ${togglePanel &&
                                classes.shrink}`}
                        >
                            <div className={classes.hamburger}>
                                <HamburgerToggle
                                    initToggle={togglePanel}
                                    onClick={toggleState =>
                                        setTogglePanel(toggleState)
                                    }
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
                            className={`${classes.visualPanel} ${togglePanel &&
                                classes.slideIn}`}
                        >
                            <VisualPanel />
                        </div>
                    </div>
                    <div>
                        <audio
                            id="audio"
                            onEnded={onSongEnd}
                            onLoadedMetadata={e =>
                                setDuration(e.currentTarget.duration)
                            }
                            onPlay={() => setIsPlaying(true)}
                            onTimeUpdate={e =>
                                setCurrentTime(e.target.currentTime)
                            }
                        ></audio>
                    </div>
                    <div className={classes.bar}>
                        <PlayerBar
                            currentTime={currentTime}
                            volume={volume}
                            onVolumeChange={e => setVolume(e.target.value)}
                            onPlayPress={() => setPlayPressed(!playPressed)}
                            playPressed={playPressed}
                            isPlaying={isPlaying}
                            uploadedSong={uploadedSong}
                            duration={duration}
                            songEnded={songEnded}
                            onCueTimeChange={e => setCueTime(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <ScreenshotModal screenshotUrl={screenshotUrl} />
            <Success screenshotSuccess={screenshotSuccess} />
            <Error screenshotError={screenshotError} />
        </>
    );
}
