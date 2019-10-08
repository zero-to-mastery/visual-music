const initialState = {
    authError: null
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_WITH_CREDENTIALS':
            return {
                ...state,
                authError: null
            };

        case 'SIGNOUT':
            return state;

        case 'REGISTER':
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
