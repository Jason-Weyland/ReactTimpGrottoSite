import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Footer from "./FooterComponent";
import About from "./AboutComponents/MainAboutComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import { CAROUSEL } from "../shared/carousel";
import { FACTSCARD } from "../shared/factscard";
import { OFFICERS } from "../shared/officer";
import { FAQ } from "../shared/faq";
import {NAVTAB} from '../shared/navtab'
import {STATES} from '../shared/states'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carousel: CAROUSEL,
            factscard: FACTSCARD,
            officers: OFFICERS,
            faq: FAQ,
            navtab: NAVTAB,
            states: STATES,
        };
    }


    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" render={() => <Home carousel={this.state.carousel} />} />
                    <Route exact strict path="/about/:tabId" render={({match}) => <About tabId={match.params.tabId} states={this.state.states} factscard={this.state.factscard} officers={this.state.officers} faq={this.state.faq} navtab={this.state.navtab} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
