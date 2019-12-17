import initialState from './initialState';

export const fullSizeReducer = (state = initialState.fullSize, action) => {
    switch (action.type) {
        case 'FULL_SIZE':
            return {
                ...state,
                isFullSize: action.payload
            };
        case 'ELEMENTS_SHOWED':
            return {
                ...state,
                isElementsShowed: action.payload
            };
        default:
            return state;
    }
};
