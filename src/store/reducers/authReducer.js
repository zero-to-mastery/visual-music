import initialState from './initialState';

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER':
        case 'LOGIN_WITH_CREDENTIALS':
            return {
                ...state,
                authError: null
            };

        case 'ERROR':
            return {
                ...state,
                authError: action.err.message
            };

        default:
            return state;
    }
};
