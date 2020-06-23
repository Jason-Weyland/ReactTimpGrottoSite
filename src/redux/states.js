import * as actionType from './ActionTypes';

export const StatesRed = (state = {states: []}, action) => {
    switch (action.type) {
        case actionType.LIST_STATES:
            return {...state, states: action.payload}
        default:
            return state;
    }
};
