import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LocalForm, Control, Errors } from "react-redux-form";
import { Row, FormGroup, Label, Button, BreadcrumbItem, Breadcrumb } from "reactstrap";

const required = (val) => val && val.length;
const isNumber = (val) => !isNaN(+val);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phoneNum: "",
            contact: "",
            questionText: "",
            touched: {
                firstName: false,
                lastName: false,
                email: false,
                phoneNum: false,
                contact: false,
                questionText: false,
            },
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }

    render() {
        return (
            <>
                <div className="container">
                    <Row>
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem>
                                    <Link to="/home">Home</Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem active>Contact</BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                    </Row>
                    <Row>
                        <div className="col">
                            <h2 className="mt-3">
                                <strong>Contact Us</strong>
                            </h2>
                        </div>
                    </Row>
                    <Row className="row-content">
                        <div className="col-md-6">
                            <h3>Come to a grotto meeting!</h3>
                            <a className="btn btn-link text-dark" href="https://www.google.com/maps/place/Orem+Public+Library/@40.298669,-111.69467,15z/data=!4m5!3m4!1s0x0:0x595700ed210f2254!8m2!3d40.298669!4d-111.69467" target="_blank">
                                <i className="fa fa-map" /> 58 N State St, Orem, UT 84057
                            </a>
                            <p>Meetings: Third Tuesday of each month @ 7:00 p.m. MST</p>
                            <p>Meetings are held in the Orem Public Library basement.</p>
                        </div>
                        <div className="col-md-6">
                            <h3>Email Us</h3>
                            <a className="btn btn-link text-dark" href="mailto:timpgrotto@gmail.com" target="_blank">
                                <i className="fa fa-envelope-o" />
                                timpgrotto@gmail.com
                            </a>
                        </div>
                    </Row>
                    <Row className="row-content">
                        <div className="col">
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <FormGroup className="form-row">
                                    <div className="col-12 col-md-6">
                                        <Label htmlFor="firstName" />
                                        First Name:
                                        <Control.text className="form-control" id="firstName" name="firstName" model=".firstName" validators={{ required }} />
                                        <Errors
                                            className="text-danger"
                                            model=".firstName"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                            }}
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <Label htmlFor="lastName" />
                                        Last Name:
                                        <Control.text className="form-control" id="lastName" name="lastName" model=".lastName" validators={{ required }} />
                                        <Errors
                                            className="text-danger"
                                            model=".lastName"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                            }}
                                        />
                                    </div>
                                </FormGroup>
                                <FormGroup className="form-row">
                                    <div className="col-12 col-md-6">
                                        <Label htmlFor="email" />
                                        Email:
                                        <Control.text className="form-control" id="email" name="email" model=".email" validators={{ required, validEmail }} />
                                        <Errors
                                            className="text-danger"
                                            model=".email"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                                validEmail: "Please enter a valid email",
                                            }}
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <Label htmlFor="phoneNum" />
                                        Phone Number:
                                        <Control.text className="form-control" id="phoneNum" name="phoneNum" model=".phoneNum" validators={{ required, isNumber }} />
                                        <Errors
                                            className="text-danger"
                                            model=".phoneNum"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                                isNumber: "Must be a number",
                                            }}
                                        />
                                    </div>
                                </FormGroup>
                                <FormGroup className="form-row">
                                    <div className="col">
                                        May we contact you?
                                        <br />
                                        <div className="form-check form-check-inline">
                                            <Control.radio id="contactYes" name="contact" model=".contact" value="true" className="form-check-input" />
                                            <Label htmlFor="contactYes" />
                                            Yes
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <Control.radio id="contactNo" name="contact" model=".contact" value="false" className="form-check-input" />
                                            <Label htmlFor="contactNo" />
                                            No
                                        </div>
                                    </div>
                                </FormGroup>
                                <FormGroup className="form-row mt-4">
                                    <Control.textarea id="questionText" name="questionText" model=".questionText" placeholder="Type question here" rows="10" className="form-control" validators={{ required }} />
                                    <Errors
                                        className="text-danger"
                                        model=".questionText"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: "Required",
                                        }}
                                    />
                                </FormGroup>
                                <Button type="submit" value="submit" color="primary">
                                    Submit
                                </Button>
                            </LocalForm>
                        </div>
                    </Row>
                </div>
            </>
        );
    }
}

export default Contact;
