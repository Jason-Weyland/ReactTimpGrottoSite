import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Footer from "./FooterComponent";
import About from "./AboutComponents/MainAboutComponent";
import Contact from "./ContactComponent";
import CreateAccount from "./CreateAccountComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { fetchCarousel, fetchFactsCard, fetchFaq, fetchOfficers, fetchNavTab, fetchStates } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
    return {
        carousel: state.carousel,
        states: state.states,
        factscard: state.factscard,
        officers: state.officers,
        faq: state.faq,
        navtab: state.navtab,
    };
};

const mapDispatchToProps = {
    fetchCarousel: () => fetchCarousel(),
    fetchFactsCard: () => fetchFactsCard(),
    fetchFaq: () => fetchFaq(),
    fetchOfficers: () => fetchOfficers(),
    fetchNavTab: () => fetchNavTab(),
    fetchStates: () => fetchStates(),
};

class Main extends Component {
    componentDidMount() {
        this.props.fetchCarousel();
        this.props.fetchFactsCard();
        this.props.fetchFaq();
        this.props.fetchOfficers();
        this.props.fetchNavTab();
        this.props.fetchStates();
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
                                render={({ match }) => <About tabId={match.params.tabId} states={this.props.states.states} factscard={this.props.factscard.factscard} officers={this.props.officers.officers} faq={this.props.faq.faq} navtab={this.props.navtab.navtab} />}
                            />
                            <Route exact path="/contact" component={Contact} />
                            <Route exact path="/createAccount" render={() => <CreateAccount states={this.props.states.states} />} />
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
