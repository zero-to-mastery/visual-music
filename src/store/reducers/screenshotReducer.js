import initialState from './initialState';

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

        case 'CLEAR_SCREENSHOT':
            return {
                ...state,
                screenshotUrl: '',
                takeScreenshot: false
            };

        case 'CLEAR_SCREENSHOT_ERR':
            console.log(action.err);
            break;

        default:
            return state;
    }
};
