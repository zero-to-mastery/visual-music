import initialState from '../initialState';

export const routeReducer = (state = initialState.route, action) => {
    switch (action.type) {
        case 'SET_CURRENT_ROUTE':
            return {
                ...state,
                currentRoute:action.payload
            };
        default:
            return state;
    }
};
