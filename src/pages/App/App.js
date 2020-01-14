import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Visualizer from '../../components/Visualizer/Visualizer.component';
import PlayerBar from '../../components/PlayerBar/PlayerBar';
import classes from './App.module.scss';

import HamburgerToggle from '../../components/HamburgerToggle/HamburgerToggle';
import VisualPanel from '../../components/VisualPanel/VisualPanel';
import ScreenshotModal from '../../components/ScreenshotModal/ScreenshotModal';
import Error from '../../components/Error/Error';
import Success from '../../components/Success/Success';
import ShowElementsOnFullSize from '../../utils/ShowElementsOnFullSize';
import { setCurrentTime, setDuration, setPlayPressed } from '../../store/actions/songActions';

export default function App() {
    // Local States
    const [uploadedSong, setUploadedSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [isTogglePanel, setisTogglePanel] = useState(false);
    const [isSongEnded, setisSongEnded] = useState(false);
    // Redux States
    const { downloadState } = useSelector(state => state.download);
    const {
        screenshotUrl,
        takeScreenshot,
        screenshotSuccess,
        screenshotError
    } = useSelector(state => state.screenshot);
    const { isFullSize, isElementsShowed } = useSelector(
        state => state.fullSize
    );

    const songUrl  = useSelector(state => state.song.url);
    const songName = useSelector(state => state.song.name);
    const songBlob = useSelector(state => state.song.blob);
    const { duration, currentTime, isPlayPressed } = useSelector(state => state.song);

    const dispatch = useDispatch();

    // Update state when a new song is uploaded
    useEffect(() => {
        setUploadedSong({url: songUrl, name: songName, blob: songBlob});
        setisSongEnded(false);
        setIsPlaying(false);
    }, [songUrl,songName,songBlob]);

    const onSongEnd = () => {
        setIsPlaying(false);
        playPressedHandler(false);
        setisSongEnded(true);
        dispatch(setCurrentTime(0));
    };

    const playPressedHandler = (isPlayPressed) => {
        dispatch(setPlayPressed(isPlayPressed));
    }

    const onTimeUpdateHandler = e => {
        const songCurrentTime = parseInt(e.target.currentTime);
        if(!isSongEnded && songCurrentTime !== currentTime){
            dispatch(setCurrentTime(songCurrentTime));
        }
    }
    
    return (
        <>
            <div className={classes.pageContainer}>
                <div className={classes.visualmusic}>
                    <div className={classes.visualContainer}>
                        <div
                            className={`${classes.visualmusic}
                             ${isTogglePanel && classes.shrink}`}
                        >
                            <div
                                id="hamburger"
                                className={`${classes.hamburger} 
                             ${isFullSize &&
                                 !isElementsShowed &&
                                 classes.hideHamburger}`}
                            >
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
                                playPressed={isPlayPressed}
                                uploadedSong={songUrl}
                                blob={songBlob}
                                downloadVisual={isSongEnded && downloadState}
                                currentTime={currentTime}
                            />
                        </div>
                        <div
                            id="visual_panel"
                            className={`${classes.visualPanel}
                             ${isTogglePanel && classes.slideIn}
                             ${isFullSize &&
                                 !isElementsShowed &&
                                 classes.hideVisualPanel}`}
                        >
                            <VisualPanel />
                        </div>
                    </div>
                    <div>
                        <audio
                            id="audio"
                            onEnded={onSongEnd}
                            onLoadedMetadata={e => dispatch(setDuration(parseInt(e.currentTarget.duration)))}
                            onPlay={() => setIsPlaying(true)}
                            onTimeUpdate={onTimeUpdateHandler}
                        ></audio>
                    </div>
                    <div className={classes.bar}>
                        <PlayerBar
                            currentTime={currentTime}
                            volume={volume}
                            onVolumeChange={e => setVolume(e.target.value)}
                            onPlayPress={() => playPressedHandler(!isPlayPressed)}
                            playPressed={isPlayPressed}
                            isPlaying={isPlaying}
                            uploadedSong={uploadedSong}
                            duration={duration}
                            isSongEnded={isSongEnded}
                            onCueTimeChange={e => setCurrentTime(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <ScreenshotModal screenshotUrl={screenshotUrl} />
            <Success screenshotSuccess={screenshotSuccess} />
            <Error screenshotError={screenshotError} />
            {/* attach when fullSize event listeners to hamburger and visual-panel for show while hover on */}
            {isFullSize && (
                <>
                    <ShowElementsOnFullSize elemID={'hamburger'} />{' '}
                    <ShowElementsOnFullSize elemID={'visual_panel'} />{' '}
                </>
            )}
        </>
    );
}