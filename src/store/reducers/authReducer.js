import initialState from './initialState';

export const authReducer = (state = initialState.authError, action) => {
    switch (action.type) {
        case 'ERROR_CLEARED':
            // the state here it's only the error, the user is registerd in firebaseReducer at the rootReducer. cause user loged/registered, error = null
            return null;

        case 'AUTH_ERROR':
            return action.err.message;

        default:
            return state;
    }
};