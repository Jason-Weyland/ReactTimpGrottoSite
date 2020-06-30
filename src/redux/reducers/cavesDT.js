import * as actionType from "../ActionTypes";

export const CavesDT = (state = { cavesDT: [] }, action) => {
  switch (action.type) {
    case actionType.ADD_CAVES_DT:
      return { ...state, cavesDT: action.payload };
    default:
      return state;
  }
};
