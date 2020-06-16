import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Footer from "./FooterComponent";
import About from "./AboutComponents/MainAboutComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

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

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" render={() => <Home carousel={this.props.carousel} />} />
                    <Route exact strict path="/about/:tabId" render={({ match }) => <About tabId={match.params.tabId} states={this.props.states} factscard={this.props.factscard} officers={this.props.officers} faq={this.props.faq} navtab={this.props.navtab} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));
