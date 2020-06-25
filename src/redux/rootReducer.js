import { combineReducers } from "redux";
import { CarouselRed } from "./reducers/carousel";
import { FactscardRed } from "./reducers/factscard";
import { FaqRed } from "./reducers/faq";
import { NavTabRed } from "./reducers/navtab";
import { OfficersRed } from "./reducers/officer";
import { StatesRed } from "./reducers/states";
import { createForms } from "react-redux-form";
import { InitialUser } from "./InitialForms/InitialUserForm";
import { InitialContact } from "./InitialForms/InitialContactForm";
import { EventsCardRed } from "./reducers/eventsCardReducer";
import { initialEventForm } from "./InitialForms/InitialEventForm";
import { initialTripForm } from "./InitialForms/InitialTripForm";

export const reducers = combineReducers({
  carousel: CarouselRed,
  factscard: FactscardRed,
  faq: FaqRed,
  navtab: NavTabRed,
  officers: OfficersRed,
  states: StatesRed,
  events: EventsCardRed,
  ...createForms({
    createUser: InitialUser,
    contactForm: InitialContact,
    eventForm: initialEventForm,
    tripForm: initialTripForm,
  }),
});
