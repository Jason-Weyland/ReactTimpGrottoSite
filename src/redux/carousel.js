import * as actionTypes from './ActionTypes';

export const CarouselRed = (
    state = {
        carousel: []
    },
    action
) => {
    switch (action.type) {
        case actionTypes.ADD_CAROUSEL_IMAGES:
            return {...state, carousel: action.payload}
        default:
            return state;
    }
};
