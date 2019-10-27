import initialState from './initialState';

export const authReducer = (state = initialState.authError, action) => {
    switch (action.type) {
        case 'REGISTER':
        case 'LOGIN_WITH_CREDENTIALS':
            state = null;
            return state;

        case 'AUTH_ERROR':
            state = action.err.message;
            return state;

        default:
            return state;
    }
};
