import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Footer from "./FooterComponent";
import About from "./AboutComponents/MainAboutComponent";
import Contact from "./ContactComponent";
import CreateAccount from "./CreateAccountComponent";
import Events from "./EventsComponents/EventsComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { actions } from "react-redux-form";
import { fetchCarousel, fetchFactsCard, fetchFaq, fetchOfficers, fetchNavTab, fetchStates, createNewUser, postContact, postEvents, fetchEventsCard } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
    return {
        carousel: state.carousel,
        states: state.states,
        factscard: state.factscard,
        officers: state.officers,
        faq: state.faq,
        navtab: state.navtab,
        events: state.events
    };
};


const mapDispatchToProps = {
    fetchCarousel: () => fetchCarousel(),
    fetchFactsCard: () => fetchFactsCard(),
    fetchFaq: () => fetchFaq(),
    fetchOfficers: () => fetchOfficers(),
    fetchNavTab: () => fetchNavTab(),
    fetchStates: () => fetchStates(),
    createNewUser: (values) => createNewUser(values),
    resetCreateUser: () => actions.reset("createUser"),
    postContact: (values) => postContact(values),
    resetContactForm: () => actions.reset('contactForm'),
    fetchEventsCard: () => fetchEventsCard(),
    postEvents: (values) => postEvents(values),
    resetEventForm: () => actions.reset('eventForm'),
    resetTripForm: () => actions.reset('tripForm'),

};

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    componentDidMount() {
        this.props.fetchCarousel();
        this.props.fetchFactsCard();
        this.props.fetchFaq();
        this.props.fetchOfficers();
        this.props.fetchNavTab();
        this.props.fetchStates();
        this.props.fetchEventsCard();
    }
    render() {
        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path="/home" render={() => <Home carousel={this.props.carousel.carousel} />} />
                            <Route
                                exact
                                strict
                                path="/about/:tabId"
                                render={({ match }) => <About 
                                                        createNewUser={this.props.createNewUser} 
                                                        resetCreateUser={this.props.resetCreateUser} 
                                                        tabId={match.params.tabId} 
                                                        states={this.props.states.states} 
                                                        factscard={this.props.factscard.factscard} 
                                                        officers={this.props.officers.officers} 
                                                        faq={this.props.faq.faq} 
                                                        navtab={this.props.navtab.navtab} />}
                            />
                            <Route exact path="/contact" render={() => <Contact postContact={this.props.postContact} resetContactForm={this.props.resetContactForm} />} />
                            <Route exact path="/createAccount" render={() => <CreateAccount states={this.props.states.states} createNewUser={this.props.createNewUser} resetCreateUser={this.props.resetCreateUser} />} />
                            <Route exact path='/events' render={() => <Events 
                                                                        events={this.props.events.events} 
                                                                        postEvents={this.props.postEvents}
                                                                        resetEventForm={this.props.resetEventForm}
                                                                        resetTripForm={this.props.resetTripForm}
                                                                        />} 
                            />
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
