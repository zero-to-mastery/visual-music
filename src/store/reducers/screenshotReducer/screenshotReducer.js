import initialState from '../initialState';

export const screenshotReducer = (state = initialState.screenshot, action) => {
    switch (action.type) {
        case 'TAKE_SCREENSHOT':
            return {
                ...state,
                takeScreenshot: true
            };

        case 'TAKE_SCREENSHOT_ERR':
            console.log(action.err);
            break;

        case 'GET_SCREENSHOT_URL':
            return {
                ...state,
                screenshotUrl: action.screenshotUrl
            };

        case 'GET_SCREENSHOT_URL_ERR':
            console.log(action.err);
            break;

        case 'SHARE_SCREENSHOT_SUCCESS':
            return {
                ...state,
                screenshotSuccess: true
            };

        case 'SHARE_SCREENSHOT_SUCCESS_ERR':
            console.log(action.err);
            break;

        case 'SHARE_SCREENSHOT_ERROR':
            return {
                ...state,
                screenshotError: true
            };

        case 'SHARE_SCREENSHOT_ERROR_ERR':
            console.log(action.err);
            break;

        case 'SHARE_SCREENSHOT_END':
            return {
                ...state,
                screenshotSuccess: false,
                screenshotError: false
            };

        case 'SHARE_SCREENSHOT_END_ERR':
            console.log(action.err);
            break;

        case 'CLEAR_SCREENSHOT':
            return {
                ...state,
                screenshotUrl: '',
                takeScreenshot: false,
                screenshotSuccess: false,
                screenshotError: false
            };

        case 'CLEAR_SCREENSHOT_ERR':
            console.log(action.err);
            break;

        default:
            return state;
    }
};
