/************************************************************
 Main component for Player Bar.
 Allows users to upload an audio file and control it.

 Current features:
 1. Load audio file.
 2. Play/Pause audio.

 TODO: - Change volume
 TODO: - Get song duration
 TODO: - Get current progress
 TODO: - Allow users to control the part of the song to be played

 ************************************************************/

import React, {Component} from 'react';
import {ReactComponent as DownloadIcon} from '../../assets/PlayerBarAssets/download-icon.svg';
import {ReactComponent as SnapshotIcon} from '../../assets/PlayerBarAssets/snapshot-icon-white-dark.svg';
import {ReactComponent as VolumeIcon} from '../../assets/PlayerBarAssets/volume-icon.svg';
import {ReactComponent as PlayIcon} from '../../assets/PlayerBarAssets/play-icon.svg';
import {ReactComponent as SongIcon} from '../../assets/PlayerBarAssets/song-icon.svg';

import classes from './PlayerBar.module.scss';

const pauseButton = (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24">
    <path fill="rgba(255, 255, 255, 0.75)" fillRule="evenodd" d="M0 0h6v24H0zM12 0h6v24h-6z"
          className="pause-icon"/>
</svg>);

/***********************************************************
 Parameters (src/pages/App/App.js):
 state:
 1. volume
 2. isPlaying
 3. uploadedSong
 4. isSongLoaded

 functions:
 1.  onPlayPress
 2.  onFileUpload
 *************************************************************/

class PlayerBar extends Component {
    state = {};

    render() {
        const {uploadedSong, onPlayPress, onFileUpload, isPlaying, isSongLoaded} = this.props;
        return (
            <div className={classes.playerBar}>
                <div className={classes.nowPlaying}>
                    <div className={classes.icon}>
                        <SongIcon/>
                    </div>
                    <div className={classes.songTitle}>
                        {uploadedSong ? uploadedSong.name : "No song selected"}
                    </div>
                </div>
                <div className={classes.playerControls}>
                    <div className={classes.playButton} onClick={onPlayPress}>
                        {isPlaying && isSongLoaded ? pauseButton : <PlayIcon/>}
                    </div>
                    <div className={classes.controls}>
                        <span className={classes.progressTime}>0:00</span>
                        <div className={classes.slider}>
                            <div className={classes.progress}/>
                        </div>
                        <span className={classes.progressTime}>0:00</span>
                    </div>
                    <div className={classes.volume}>
                        <div className={classes.volumeButton}>
                            <VolumeIcon/>
                        </div>
                    </div>
                </div>
                <div className={classes.playerBarRight}>
                    <div className={classes.download}>
                        <div className={classes.snapshotButton}>
                            <SnapshotIcon/>
                        </div>
                        <div className={classes.downloadButton}>
                            <DownloadIcon/>
                        </div>
                    </div>
                    <div className={classes.uploadButton}>
                        <label htmlFor="song" className={classes.songContainer}>Upload New Song
                            <input type="file" id="song" accept="audio/*" name="song" onChange={onFileUpload}/>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlayerBar;