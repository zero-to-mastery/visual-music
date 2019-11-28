export const getScreenshotUrl = screenshotUrl => {
    return (dispatch, getState) => {
        try {
            dispatch({
                type: 'GET_SCREENSHOT_URL',
                screenshotUrl
            });
        } catch (err) {
            dispatch({
                type: 'GET_SCREENSHOT_URL_ERR',
                err
            });
        }
    };
};

export const clearScreenshotUrl = () => {
    return (dispatch, getState) => {
        try {
            dispatch({
                type: 'CLEAR_SCREENSHOT_URL'
            });
        } catch (err) {
            dispatch({
                type: 'CLEAR_SCREENSHOT_URL_ERR',
                err
            });
        }
    };
};
