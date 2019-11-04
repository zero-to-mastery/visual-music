// ToDo - create some desigen to the button

import React from 'react';
import { useDispatch } from 'react-redux';
import { setSong } from '../../../store/actions/songActions';

export default function UploadButton({ classes }) {
    const dispatch = useDispatch();

    const setNewSong = e => {
        e.preventDefault();
        dispatch(setSong(e.target));
    };

    return (
        <div className={classes.uploadButton}>
            <label className={classes.songContainer}>
                Upload New Song
                <input
                    id="song"
                    name="song"
                    type="file"
                    onChange={setNewSong}
                />
            </label>
        </div>
    );
}
