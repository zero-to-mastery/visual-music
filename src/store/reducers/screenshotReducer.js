import initialState from './initialState';

export const screenshotReducer = (
    state = initialState.screenshotUrl,
    action
) => {
    switch (action.type) {
        case 'GET_SCREENSHOT_URL':
            console.log(action.screenshotUrl);
            return {
                screenshotUrl: action.screenshotUrl
            };

        case 'GET_SCREENSHOT_URL_ERR':
            console.log(action.err);
            break;

        case 'CLEAR_SCREENSHOT_URL':
            return {
                screenshotUrl: ''
            };

        case 'CLEAR_SCREENSHOT_URL_ERR':
            console.log(action.err);
            break;

        default:
            return state;
    }
};
