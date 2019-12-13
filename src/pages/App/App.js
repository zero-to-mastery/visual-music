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
    const [isTogglePanel, setisTogglePanel] = useState(false);
    const [isSongEnded, setisSongEnded] = useState(false);
    const [isFullSize, setIsFullSize] = useState(false);
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
        setisSongEnded(false);
        setPlayPressed(false);
        setIsPlaying(false);
    }, [song]);

    const onSongEnd = () => {
        setIsPlaying(false);
        setPlayPressed(false);
        setisSongEnded(true);
    };

    return (
        <>
            <div className={classes.pageContainer}>
                <div className={classes.visualmusic}>
                    <div className={classes.visualContainer}>
                        <div
                            className={`${
                                classes.visualmusic
                            } ${isTogglePanel && classes.shrink}`}
                        >
                            <div className={classes.hamburger}>
                                <HamburgerToggle
                                    initToggle={isTogglePanel}
                                    onClick={toggleState =>
                                        setisTogglePanel(toggleState)
                                    }
                                />
                            </div>
                            <Visualizer
                                volume={volume}
                                takeScreenshot={takeScreenshot}
                                playPressed={playPressed}
                                uploadedSong={uploadedSong && uploadedSong.url}
                                blob={blob}
                                downloadVisual={isSongEnded && downloadState}
                                cueTime={cueTime}
                                isFullSize={isFullSize}
                            />
                        </div>
                        <div
                            className={`${
                                classes.visualPanel
                            } ${isTogglePanel && classes.slideIn}`}
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
                            isSongEnded={isSongEnded}
                            onCueTimeChange={e => setCueTime(e.target.value)}
                            isFullSize={isFullSize}
                            setIsFullSize={setIsFullSize}
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
