import * as actionType from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

// ADD ERROR HANDLING

export const fetchCarousel = () => dispatch => {
  fetch(baseUrl + "carousel")
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(`Error ${response.status}: ${response.statusText}`);
          error.response = response;
          throw error;
        }
      },
      error => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then(response => response.json())
    .then(carousel => dispatch(addCarousel(carousel)));
};

export const addCarousel = carousel => ({
  type: actionType.ADD_CAROUSEL_IMAGES,
  payload: carousel,
});

export const fetchFactsCard = () => dispatch => {
  fetch(baseUrl + "factscard")
    .then(response => response.json())
    .then(factscard => dispatch(addFactsCard(factscard)));
};

export const addFactsCard = factscard => ({
  type: actionType.ADD_FACTSCARD,
  payload: factscard,
});

export const fetchFaq = () => dispatch => {
  fetch(baseUrl + "faq")
    .then(response => response.json())
    .then(faq => dispatch(addFaq(faq)));
};

export const addFaq = faq => ({
  type: actionType.ADD_FAQ,
  payload: faq,
});

export const fetchOfficers = () => dispatch => {
  fetch(baseUrl + "officers")
    .then(response => response.json())
    .then(officers => dispatch(addOfficers(officers)));
};

export const addOfficers = officers => ({
  type: actionType.ADD_OFFICERS,
  payload: officers,
});

export const fetchNavTab = () => dispatch => {
  fetch(baseUrl + "navtab")
    .then(response => response.json())
    .then(navtab => dispatch(addNavTabs(navtab)));
};

export const addNavTabs = navtab => ({
  type: actionType.ADD_NAVTAB,
  payload: navtab,
});

export const fetchStates = () => dispatch => {
  fetch(baseUrl + "states")
    .then(response => response.json())
    .then(states => dispatch(addStates(states)));
};

export const addStates = states => ({
  type: actionType.LIST_STATES,
  payload: states,
});

export const createNewUser = values => dispatch => {
  return fetch(baseUrl + "users", {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(`Error ${response.status}: ${response.statusText}`);
          error.response = response;
          throw error;
        }
      },
      error => {
        throw error;
      }
    )
    .then(response => response.json())
    .then(alert("Thank you for becoming a member!"))
    .catch(error => {
      console.log("post comment", error.message);
      alert("Your request could not be processed\nError: " + error.message);
    });
};

export const postContact = values => dispatch => {
  return fetch(baseUrl + "contact", {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(`Error ${response.status}: ${response.statusText}`);
          error.response = response;
          throw error;
        }
      },
      error => {
        throw error;
      }
    )
    .then(response => response.json())
    .then(alert("Thank you for your question!"))
    .catch(error => {
      console.log("post comment", error.message);
      alert("Your request could not be processed\nError: " + error.message);
    });
};

export const postEvents = values => dispatch => {
  return fetch(baseUrl + "events", {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(`Error ${response.status}: ${response.statusText}`);
          error.response = response;
          throw error;
        }
      },
      error => {
        throw error;
      }
    )
    .then(response => response.json())
    .then(response => dispatch(addEvent(response)))
    .catch(error => {
      console.log("post comment", error.message);
      alert("Your request could not be processed\nError: " + error.message);
    });
};

export const fetchEventsCard = () => dispatch => {
  fetch(baseUrl + "events")
    .then(response => response.json())
    .then(events => dispatch(addEvents(events)));
};

export const addEvents = events => ({
  type: actionType.ADD_EVENTS,
  payload: events,
});

export const addEvent = newEvent => ({
  type: actionType.ADD_EVENT,
  payload: newEvent,
});

export const fetchRecentTrips = () => dispatch => {
  fetch(baseUrl + "recentTrips")
    .then(response => response.json())
    .then(recentTrips => dispatch(addRecentTrips(recentTrips)));
};

export const addRecentTrips = recentTrips => ({
  type: actionType.ADD_RECENT_TRIPS,
  payload: recentTrips,
});

export const postTripReport = values => dispatch => {
  return fetch(baseUrl + "recentTrips", {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(`Error ${response.status}: ${response.statusText}`);
          error.response = response;
          throw error;
        }
      },
      error => {
        throw error;
      }
    )
    .then(response => response.json())
    .then(response => dispatch(addRecentTrip(response)))
    .then(alert("Thank you for submitting a trip report!"))
    .catch(error => {
      console.log("post comment", error.message);
      alert("Your request could not be processed\nError: " + error.message);
    });
};

export const addRecentTrip = recentTrip => ({
  type: actionType.ADD_RECENT_TRIP,
  payload: recentTrip,
});

export const fetchTripsCarousel = () => dispatch => {
  fetch(baseUrl + "tripsCarousel")
    .then(response => response.json())
    .then(tripsCarousel => dispatch(addTripsCarousel(tripsCarousel)));
};

export const addTripsCarousel = tripsCarousel => ({
  type: actionType.ADD_TRIPS_CAROUSEL,
  payload: tripsCarousel,
});

export const fetchCavesDT = () => dispatch => {
  fetch(baseUrl + "cavesDT")
    .then(response => response.json())
    .then(cavesDT => dispatch(addCavesDT(cavesDT)));
};

export const addCavesDT = cavesDT => ({
  type: actionType.ADD_CAVES_DT,
  payload: cavesDT,
});
