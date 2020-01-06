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
                downloadState: false,
                song: initialState.song
            };

        case 'SONG_ERROR':
            console.log(action.err);
            break;

        case 'BLOB_STORED':
            return {
                ...state,
                blob: action.blob
            };
        case 'SET_CURRENT_TIME_FORMATED':
                return {
                    ...state,
                    currentTime: action.currentTime
                }
        case 'SET_DURATION_FORMATED':
            return {
                ...state,
                duration: action.duration
            }
        case 'PLAY_PRESSED':
            return {
                ...state,
                isPlayPressed: action.isPlayPressed
            }
        default:
            return state;
    }
};
