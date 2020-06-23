import { combineReducers } from "redux";
import { CarouselRed } from "./carousel";
import { FactscardRed } from "./factscard";
import { FaqRed } from "./faq";
import { NavTabRed } from "./navtab";
import { OfficersRed } from "./officer";
import { StatesRed } from "./states";

export const reducers = combineReducers({
    carousel: CarouselRed,
    factscard: FactscardRed,
    faq: FaqRed,
    navtab: NavTabRed,
    officers: OfficersRed,
    states: StatesRed,
});
