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

export const setCurrentTime = currentTime => {
    return (dispatch, getState) => {
        try{
            dispatch({type: 'SET_CURRENT_TIME', currentTime})
        }catch(err){
            dispatch({
                type: 'SONG_ERR',
                err
            });
        }

    }
}

export const setDuration = duration => {
    return (dispatch, getState) => {
        try{
            dispatch({type: 'SET_DURATION', duration})
        }catch(err){
            dispatch({
                type: 'SONG_ERR',
                err
            });
        }

    }
}

export const setPlayPressed = isPlayPressed => {
    return (dispatch, getState) => {
        try{
            dispatch({type: 'PLAY_PRESSED', isPlayPressed})
        }catch(err){
            dispatch({
                type: 'SONG_ERR',
                err
            });
        }

    }
}