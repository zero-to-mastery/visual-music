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

import React, { useState, useEffect } from 'react';
import { ReactComponent as SnapshotIcon } from '../../assets/PlayerBarAssets/snapshot-icon-white-dark.svg';
import { ReactComponent as VolumeIcon } from '../../assets/PlayerBarAssets/volume-icon.svg';
import { ReactComponent as PlayIcon } from '../../assets/PlayerBarAssets/play-icon.svg';
import { ReactComponent as PauseIcon } from '../../assets/PlayerBarAssets/pause-icon.svg';
import { ReactComponent as SongIcon } from '../../assets/PlayerBarAssets/song-icon.svg';
import { ReactComponent as RollingIcon } from '../../assets/LoadingAssets/Rolling.svg';
import UploadButton from './UploadButton/UploadButton';
import classes from './PlayerBar.module.scss';
import DownloadButton from './DownloadButton/DownloadButton';

export default function PlayerBar(props) {
    const [formatedDuration, setFormatedDuration] = useState('0:00');
    const [formatedCurrentTime, setFormatedCurrentTime] = useState('0:00');

    // Props from (src/pages/App/App.js):
    const {
        uploadedSong,
        duration,
        onPlayPress,
        playPressed,
        isPlaying,
        volume,
        onVolumeChange,
        songEnded,
        currentTime,
        onCueTimeChange
    } = props;

    // Set formated duration
    useEffect(() => {
        setFormatedDuration(getTime(duration));
    }, [duration]);

    // Set formated current time
    useEffect(() => {
        setFormatedCurrentTime(getTime(currentTime));
    }, [currentTime]);

    // Format time (eg. 140 to 2:20)
    const getTime = dur => {
        return (
            Math.floor(dur / 60) + ':' + ('0' + Math.floor(dur % 60)).slice(-2)
        );
    };

    // Update the width for the progress slider base on the current time
    const sliderProgressWidth = {
        width: `${(100 * currentTime) / duration}%`
    };

    // Change play button to loading svg when loading on p5 sound
    let actionButton;
    if (isPlaying) {
        actionButton = <PauseIcon />;
    } else {
        actionButton = <RollingIcon />;
    }

    return (
        <div className={classes.playerBar}>
            <div className={classes.nowPlaying}>
                <div className={classes.icon}>
                    <SongIcon />
                </div>
                <div className={classes.songTitle}>
                    {uploadedSong ? uploadedSong.name : 'No song selected'}
                </div>
            </div>
            <div className={classes.playerControls}>
                <div className={classes.playButton} onClick={onPlayPress}>
                    {playPressed ? actionButton : <PlayIcon />}
                </div>
                <div className={classes.controls}>
                    <span className={classes.progressTime}>
                        {formatedCurrentTime}
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
                            max={duration}
                            step="1"
                            name="cue"
                            onClick={onCueTimeChange}
                        />
                    </div>
                    <span className={classes.progressTime}>
                        {formatedDuration}
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
                        <SnapshotIcon />
                    </div>
                    <div className={classes.downloadButton}>
                        <DownloadButton
                            isPlaying={isPlaying}
                            songEnded={songEnded}
                        />
                    </div>
                </div>
                <UploadButton classes={classes} />
            </div>
        </div>
    );
}
