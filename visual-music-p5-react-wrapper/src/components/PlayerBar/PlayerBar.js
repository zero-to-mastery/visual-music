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

import './PlayerBar.css';

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
            <div className='player-bar'>
                <div className="now-playing">
                    <div className="icon">
                        <SongIcon/>
                    </div>
                    <div className="song-title">
                        {uploadedSong ? uploadedSong.name : "No song selected"}
                    </div>
                </div>
                <div className="player-controls">
                    <div className="play-button" onClick={onPlayPress}>
                        {isPlaying && isSongLoaded ? pauseButton : <PlayIcon/>}
                    </div>
                    <div className="controls">
                        <span className="progress-time">0:00</span>
                        <div className="slider">
                            <div className="progress"/>
                        </div>
                        <span className="progress-time">0:00</span>
                    </div>
                    <div className="volume">
                        <div className="volume-button">
                            <VolumeIcon/>
                        </div>
                    </div>
                </div>
                <div className="player-bar-right">
                    <div className="download">
                        <div className="snapshot-button">
                            <SnapshotIcon/>
                        </div>
                        <div className="download-button">
                            <DownloadIcon/>
                        </div>
                    </div>
                    <div className="upload-button">
                        <label htmlFor="song" className="song-container">Upload New Song
                            <input type="file" id="song" accept="audio/*" name="song" onChange={onFileUpload}/>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlayerBar;