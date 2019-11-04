export const downloadVisualStart = () => {
    return (dispatch, getState) => {
        try {
            dispatch({
                type: 'DOWNLOAD_START'
            });
        } catch (err) {
            dispatch({
                type: 'DOWNLOAD_ERR',
                err
            });
        }
    };
};

export const downloadVisualEnd = () => {
    return (dispatch, getState) => {
        try {
            dispatch({
                type: 'DOWNLOAD_END'
            });
        } catch (err) {
            dispatch({
                type: 'DOWNLOAD_ERR',
                err
            });
        }
    };
};
