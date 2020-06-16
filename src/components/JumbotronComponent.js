import React, { Component } from "react";
import { Jumbotron } from 'reactstrap';

class Jumbo extends Component {
    render() {
        return(
            <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col-3 col-lg-2 align-self-center">
                                <img src="/assets/images/logo.jpg" alt="timp-grotto-logo" className="img-fluid" />
                            </div>
                            <div className="col-9 col-md-5">
                                <h1 className="text-dark align-self-center">
                                    <strong>Timpanogos Grotto</strong>
                                </h1>
                                <div className="row">
                                    <h2 className="col-12 d-none d-md-inline-flex">
                                        <small>"Take nothing but pictures</small>
                                    </h2>
                                    <h2 className="col-12 d-none d-md-inline-flex offset-1">
                                        <small>Leave nothing but footprints</small>
                                    </h2>
                                    <h2 className="col-12 d-none d-md-inline-flex offset-2">
                                        <small>Waste nothing but time..."</small>
                                    </h2>
                                </div>
                            </div>
                            <div className="col d-flex justify-content-sm-center justify-content-lg-end align-self-center">
                                <form className="form-inline ml-auto d-none d-sm-inline">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
                                        Search
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
        );
    }
}

export default Jumbo