/************************************************************
 Main component for Player Bar.
 Allows users to upload an audio file and control it.
 Current features:
 1. Load audio file.
 2. Play/Pause audio.
 3. Download visualization
 4. Change volume
 5. Control the part of the song to be played
 ************************************************************/
/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    setIsFullSize,
    setIsElementsShowed
} from '../../store/actions/fullSizeActions';
import { ReactComponent as VolumeIcon } from '../../assets/PlayerBarAssets/volume-icon.svg';
import { ReactComponent as PlayIcon } from '../../assets/PlayerBarAssets/play-icon.svg';
import { ReactComponent as PauseIcon } from '../../assets/PlayerBarAssets/pause-icon.svg';
import { ReactComponent as SongIcon } from '../../assets/PlayerBarAssets/song-icon.svg';
import { ReactComponent as RollingIcon } from '../../assets/LoadingAssets/Rolling.svg';
import UploadButton from './UploadButton/UploadButton';
import ScreenshotButton from './ScreenshotButton/ScreenshotButton';
import DownloadButton from './DownloadButton/DownloadButton';
import classes from './PlayerBar.module.scss';
import ShowElementsOnFullSize from '../../utils/ShowElementsOnFullSize';
import { getTimeFormatedMMSS } from '../../utils/timeFormat';

export default function PlayerBar(props) {
    const dispatch = useDispatch();
    const { isFullSize, isElementsShowed } = useSelector(
        state => state.fullSize
    );
    
    const songName        = useSelector(state => state.song.name);
    const isPlayPressed   = useSelector(state => state.song.isPlayPressed);
    const songCurrentTime = useSelector(state => state.song.currentTime);
    const songDuration    = useSelector(state => state.song.duration);

    // Props from (src/pages/App/App.js):
    const {
        onPlayPress,
        isPlaying,
        volume,
        onVolumeChange,
        isSongEnded,
        onCueTimeChange
    } = props;

   
    // Update the width for the progress slider base on the current time
    const sliderProgressWidth = {
        width: `${(100 * songCurrentTime) / songDuration}%`
    };

    // Change play button to loading svg when loading on p5 sound
    let actionButton;
    if (isPlaying) {
        actionButton = <PauseIcon />;
    } else {
        actionButton = <RollingIcon />;
    }
    return (
        <div
            id="player_bar"
            className={`${classes.playerBar} 
            ${isFullSize && !isElementsShowed && classes.hideBar}`}
        >
            <div className={classes.nowPlaying}>
                <div className={classes.icon}>
                    <SongIcon />
                </div>
                <div className={classes.songTitle}>
                    {songName ? songName : 'No song selected'}
                </div>
            </div>
            <div className={classes.playerControls}>
                <div className={classes.playButton} onClick={onPlayPress}>
                    {isPlayPressed ? actionButton : <PlayIcon />}
                </div>
                <div className={classes.controls}>
                    <span className={classes.progressTime}>
                        {getTimeFormatedMMSS(songCurrentTime)}
                    </span>
                    <div className={classes.slider}>
                        <div
                            className={classes.progress}
                            style={sliderProgressWidth}
                        />
                        <input
                            className={classes.rangeInput}
                            type="range"
                            min="0"
                            max={songDuration}
                            step="1"
                            name="cue"
                            onClick={onCueTimeChange}
                        />
                    </div>
                    <span className={classes.progressTime}>
                        {getTimeFormatedMMSS(songDuration)}
                    </span>
                </div>
                <div className={classes.volume}>
                    <div className={classes.volumeButton}>
                        <VolumeIcon />
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            name="volume"
                            value={volume}
                            className={classes.volumeSlider}
                            onChange={onVolumeChange}
                        ></input>
                    </div>
                </div>
            </div>
            <div className={classes.playerBarRight}>
                <div className={classes.download}>
                    <div className={classes.snapshotButton}>
                        <ScreenshotButton />
                    </div>
                    <div className={classes.downloadButton}>
                        <DownloadButton
                            isPlaying={isPlaying}
                            isSongEnded={isSongEnded}
                        />
                    </div>
                </div>
                <UploadButton classes={classes} />

                {/* I didn't know which icon to add so you more than welcome to replace this one */}
                <img
                    className={`${classes.setSizeIcon} ${
                        isFullSize
                            ? classes.fullSizeIcon
                            : classes.normalSizeIcon
                    }`}
                    alt="set size icon"
                    src="https://icon-library.net//images/full-screen-icon-png/full-screen-icon-png-21.jpg"
                    onClick={() => dispatch(setIsFullSize(!isFullSize))}
                />
            </div>

            {isFullSize && <ShowElementsOnFullSize elemID={'player_bar'} />}
        </div>
    );
}