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

export const setCurrentTimeFormated = currentTime => {
    return (dispatch, getState) => {
        try{
            dispatch({type: 'SET_CURRENT_TIME_FORMATED', currentTime})
        }catch(err){
            dispatchError(dispatch,err);
        }

    }
}

export const setDurationFormated = duration => {
    return (dispatch, getState) => {
        try{
            dispatch({type: 'SET_DURATION_FORMATED', duration})
        }catch(err){
            dispatchError(dispatch,err);
        }

    }
}

export const setPlayPressed = isPlayPressed => {
    return (dispatch, getState) => {
        try{
            dispatch({type: 'PLAY_PRESSED', isPlayPressed})
        }catch(err){
            dispatchError(dispatch,err);
        }

    }
}

const dispatchError = (dispatch,err) => {dispatch({type: 'SONG_ERR', err})}
