import * as actionType from "../ActionTypes";

export const OfficersRed = (
    state = { 
        officers: [] }, 
        action
        ) => {
    switch (action.type) {
        case actionType.ADD_OFFICERS:
            return {...state, officers: action.payload}
        default:
            return state;
    }
};
