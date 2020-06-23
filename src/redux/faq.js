import * as actionType from './ActionTypes';


export const FaqRed = (
    state= {
        faq: []
    },
    action
) => {
    switch (action.type) {
        case actionType.ADD_FAQ:
            return{...state, faq: action.payload}
        default:
            return state;
    }
}
