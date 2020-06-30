import * as actionType from "../ActionTypes";

export const tripsCarousel = (state = { tripsCarousel: [] }, action) => {
  switch (action.type) {
    case actionType.ADD_TRIPS_CAROUSEL:
      return { ...state, tripsCarousel: action.payload };
    default:
      return state;
  }
};
