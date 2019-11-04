export const setSong = song => {
    return (dispatch, getState) => {
        try {
            dispatch({
                type: 'SONG_SETTED',
                url: song,
                name: song.files[0].name
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
