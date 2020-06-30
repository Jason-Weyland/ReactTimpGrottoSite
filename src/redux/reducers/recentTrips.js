import * as actionType from "../ActionTypes";

export const recentTrips = (state = { recentTrips: [] }, action) => {
  switch (action.type) {
    case actionType.ADD_RECENT_TRIPS:
      return { ...state, recentTrips: action.payload };
    case actionType.ADD_RECENT_TRIP:
      const newTrip = action.payload
      return {...state, recentTrips: state.recentTrips.concat(newTrip) }
    default:
      return state;
  }
};
