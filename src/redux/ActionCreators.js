import * as actionType from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

// ADD ERROR HANDLING

export const fetchCarousel = () => (dispatch) => {
    fetch(baseUrl + "carousel")
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then((response) => response.json())
        .then((carousel) => dispatch(addCarousel(carousel)));
};

export const addCarousel = (carousel) => ({
    type: actionType.ADD_CAROUSEL_IMAGES,
    payload: carousel,
});

export const fetchFactsCard = () => (dispatch) => {
  fetch(baseUrl + 'factscard')
  .then((response) => response.json())
  .then((factscard) => dispatch(addFactsCard(factscard)));
};

export const addFactsCard = factscard => ({
  type: actionType.ADD_FACTSCARD,
  payload: factscard
})

export const fetchFaq = () => dispatch => {
  fetch(baseUrl + 'faq')
  .then((response) => response.json())
  .then((faq) => dispatch(addFaq(faq)))
};

export const addFaq = faq => ({
  type: actionType.ADD_FAQ,
  payload: faq
});

export const fetchOfficers = () => dispatch => {
  fetch(baseUrl + 'officers')
  .then((response) => response.json())
  .then((officers) => dispatch(addOfficers(officers)))
}

export const addOfficers = officers => ({
  type: actionType.ADD_OFFICERS,
  payload: officers
})

export const fetchNavTab = () => dispatch => {
  fetch(baseUrl + 'navtab')
  .then((response) => response.json())
  .then((navtab) => dispatch(addNavTabs(navtab)))
};

export const addNavTabs = navtab => ({
  type: actionType.ADD_NAVTAB,
  payload: navtab
})

export const fetchStates = () => dispatch => {
  fetch(baseUrl + 'states')
  .then((response) => response.json())
  .then((states)=> dispatch(addStates(states)))
}

export const addStates = states => ({
  type: actionType.LIST_STATES,
  payload: states
})
