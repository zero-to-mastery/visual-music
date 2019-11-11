export const setSong = song => {
    return (dispatch, getState) => {
        try {
            dispatch({
                type: 'SONG_SETTED',
                url: song.url,
                name: song.filename
            });
        } catch (err) {
            dispatch({
                type: 'SONG_ERR',
                err
            });
        }
    };
};

export const clearSong = () => {
    return (dispatch, getState) => {
        try {
            dispatch({
                type: 'SONG_CLEARED'
            });
        } catch (err) {
            dispatch({
                type: 'SONG_ERR',
                err
            });
        }
    };
};

export const storeBlob = blob => {
    return (dispatch, getState) => {
        try {
            dispatch({
                type: 'BLOB_STORED',
                blob
            });
        } catch (err) {
            dispatch({
                type: 'SONG_ERR',
                err
            });
        }
    };
};

export const currentSongTime = time => {
    return (dispatch, getState) => {
        try {
            dispatch({
                type: 'CURRENT_TIME',
                time
            });
        } catch (err) {
            dispatch({
                type: 'SONG_ERR',
                err
            });
        }
    };
};
