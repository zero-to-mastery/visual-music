export const setCurrentRoute = routePath => {
    return (dispatch, getState) => {
        dispatch({
            type: 'SET_CURRENT_ROUTE',
            payload: routePath
        });
    };
};