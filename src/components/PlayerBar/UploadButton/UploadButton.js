// ToDo - create some desigen to the button

import React from 'react';
import { useDispatch } from 'react-redux';
import { clearSong } from '../../../store/actions/songActions';

export default function UploadButton({ classes }) {
	const dispatch = useDispatch();

	return (
		<div className={classes.uploadButton}>
			<label className={classes.songContainer}>
				Upload New Song
				<button
					id="song"
					name="song"
					onClick={() => {
						dispatch(clearSong());
					}}
				/>
			</label>
		</div>
	);
}
