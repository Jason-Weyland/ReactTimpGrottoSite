import * as actionType from './ActionTypes';

export const FactscardRed = (
    state= {
        factscard: []
    },
    action
) => {
    switch (action.type) {
        case actionType.ADD_FACTSCARD:
            return {...state, factscard: action.payload}
        default:
            return state;
    }
};
