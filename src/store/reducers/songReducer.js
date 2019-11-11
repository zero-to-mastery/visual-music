import initialState from './initialState';

export const songReducer = (state = initialState.song, action) => {
    switch (action.type) {
        case 'SONG_SETTED':
            // for more info- https://trello.com/c/AAphnJN4/116-discussion-cors-error
            return {
                ...state,
                url: `https://cors-anywhere.herokuapp.com/${action.url}`,
                name: action.name
            };

        case 'SONG_CLEARED':
            return {
                url: null,
                name: null,
                blob: null,
                time: 0
            };
        case 'CURRENT_TIME':
            return {
                ...state,
                time: action.time
            };

        case 'SONG_ERROR':
            console.log(action.err);
            break;

        case 'BLOB_STORED':
            return {
                ...state,
                blob: action.blob
            };

        default:
            return state;
    }
};
