import initialState from './initialState';

export const downloadReducer = (state = initialState.downloadState, action) => {
    switch (action.type) {
        case 'DOWNLOAD_START':
            return {
                downloadState: true
            };

        case 'DOWNLOAD_END':
            return {
                downloadState: false
            };

        case 'DOWNLOAD_ERROR':
            console.log(action.err);
            break;

        default:
            return state;
    }
};
