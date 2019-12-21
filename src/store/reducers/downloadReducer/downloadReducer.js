import initialState from '../initialState';

export const downloadReducer = (state = initialState.downloadState, action) => {
    switch (action.type) {
        case 'DOWNLOAD_START':
            return true;

        case 'SONG_CLEARED':
        case 'DOWNLOAD_END':
            return false;

        case 'DOWNLOAD_ERROR':
            console.log(action.err);
            break;

        default:
            return state;
    }
};
