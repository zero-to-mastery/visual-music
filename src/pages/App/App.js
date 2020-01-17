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

    const songInfo = useSelector(state => state.song);

    const dispatch = useDispatch();

    // Update state when a new song is uploaded
    useEffect(() => {
        setisSongEnded(false);
        setIsPlaying(false);
    }, []);

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
        if(!isSongEnded && songCurrentTime !== songInfo.currentTime){
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
                                playPressed={songInfo.isPlayPressed}
                                uploadedSong={songInfo.url}
                                blob={songInfo.blob}
                                downloadVisual={isSongEnded && downloadState}
                                currentTime={songInfo.currentTime}
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
                            currentTime={songInfo.currentTime}
                            volume={volume}
                            onVolumeChange={e => setVolume(e.target.value)}
                            onPlayPress={() => playPressedHandler(!songInfo.isPlayPressed)}
                            playPressed={songInfo.isPlayPressed}
                            isPlaying={isPlaying}
                            uploadedSong={songInfo}
                            duration={songInfo.duration}
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