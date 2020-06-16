import { CAROUSEL } from "../shared/carousel";
import { FACTSCARD } from "../shared/factscard";
import { OFFICERS } from "../shared/officer";
import { FAQ } from "../shared/faq";
import { NAVTAB } from "../shared/navtab";
import { STATES } from "../shared/states";

export const initialState = {
    carousel: CAROUSEL,
    factscard: FACTSCARD,
    officers: OFFICERS,
    faq: FAQ,
    navtab: NAVTAB,
    states: STATES,
};

export const Reducer = (state = initialState, action) => {
    return state;
};
