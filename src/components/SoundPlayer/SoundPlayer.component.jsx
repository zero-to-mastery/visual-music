/************************************************************
    Main component for sound controls.
    Allows user to control the uploaded sound file.
    Current features:
    1.  Load sound file
    2.  Play/Pause song
    3.  Change volume

    TODO:
    1.  Implement slider for the sound file buffer/duration - allow users to control
        the part of the song to be played.
************************************************************/

import React from 'react';
import classes from './SoundPlayer.module.scss';

/***********************************************************
    Parameters (src/pages/App/App.js):
    state:
    1. volume
    2. buttonText

    functions:
    1.  onPlayPress
    2.  onVolumeChange
    3.  onFileUpload
*************************************************************/
const SoundPlayer = ({
	volume,
	onPlayPress,
	onVolumeChange,
	onFileUpload,
	buttonText,
	isSongLoaded
}) => (
	<div className={classes.soundplayer}>
		<input type='file' accept='audio/*' name='file' onChange={onFileUpload} />
		<div className={classes.soundplayerControls}>
			<div>
				<button
					className={classes.soundplayer}
					onClick={onPlayPress}
					disabled={!isSongLoaded}
				>
					{buttonText}
				</button>
			</div>
			<div>
				<label>Volume</label>
				<input
					type='range'
					name='volume'
					value={volume}
					min='0.0'
					max='1.0'
					step='0.1'
					onChange={onVolumeChange}
					
				/>
			</div>
			dfkdlfkdlf
		</div>
	</div>
);

export default SoundPlayer;
