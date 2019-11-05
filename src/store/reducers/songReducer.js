import initialState from './initialState';

export const songReducer = (state = initialState.song, action) => {
    switch (action.type) {
        case 'SONG_SETTED':
            // for more info- https://trello.com/c/AAphnJN4/116-discussion-cors-error
            return {
                url: `https://cors-anywhere.herokuapp.com/${action.url}`,
                name: action.name
            };

        case 'SONG_CLEARED':
            return null;

        case 'SONG_ERROR':
            console.log(action.err);
            break;

        default:
            return state;
    }
};
