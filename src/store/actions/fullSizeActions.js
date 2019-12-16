export const setIsFullSize = boolean => {
    return (dispatch, getState) =>
        dispatch({ type: 'FULL_SIZE', payload: boolean });
};

export const setIsElementsShowed = boolean => {
    return (dispatch, getState) =>
        dispatch({ type: 'ELEMENTS_SHOWED', payload: boolean });
};
