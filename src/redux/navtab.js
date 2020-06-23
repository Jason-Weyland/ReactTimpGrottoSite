import * as actionType from './ActionTypes'

export const NavTabRed = (
    state = {
        navtab: []
    }, 
    action
    ) => {
    switch (action.type) {
        case actionType.ADD_NAVTAB:
            return {...state, navtab: action.payload}
        default:
            return state;
    }
};
