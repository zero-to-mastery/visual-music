export const takeScreenshot = () => {
    return (dispatch, getState) => {
        try {
            dispatch({
                type: 'TAKE_SCREENSHOT'
            });
        } catch (err) {
            dispatch({
                type: 'TAKE_SCREENSHOT_ERR',
                err
            });
        }
    };
};

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

export const clearScreenshot = () => {
    return (dispatch, getState) => {
        try {
            dispatch({
                type: 'CLEAR_SCREENSHOT'
            });
        } catch (err) {
            dispatch({
                type: 'CLEAR_SCREENSHOT_URL_ERR',
                err
            });
        }
    };
};
