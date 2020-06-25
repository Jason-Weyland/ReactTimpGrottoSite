import * as actionType from "../ActionTypes";

export const EventsCardRed = (
  state = {
    events: [],
  },
  action
) => {
  switch (action.type) {
    case actionType.ADD_EVENTS:
      return { ...state, events: action.payload };

    case actionType.ADD_EVENT:
      const newEvent = action.payload;
      return { ...state, events: state.events.concat(newEvent) };
    default:
      return state;
  }
};
