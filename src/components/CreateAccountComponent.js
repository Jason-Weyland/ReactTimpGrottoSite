import React, { Component } from "react";
import { BreadcrumbItem, Breadcrumb, Row, Col, FormGroup, Label, Card, CardBody, CardFooter, Button } from "reactstrap";
import { Form, Control, Errors } from "react-redux-form";
import { Link } from "react-router-dom";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(+val);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const validPassword = (val) => /^^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/i.test(val);

class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            acctFirstName: "",
            acctLastName: "",
            acctUserName: "",
            acctPassword: "",
            acctConfPassword: "",
            acctEmail: "",
            acctPhone: "",
            acctAddress: "",
            acctCity: "",
            acctState: "",
            acctZip: "",
            autoRenew: false,
            termsAgree: false,
            touched: {
                acctFirstName: false,
                acctLastName: false,
                acctUserName: false,
                acctPasswor: false,
                acctEmail: false,
                acctPhone: false,
                acctAddress: false,
                acctCity: false,
                acctState: false,
                acctZip: false,
            },
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.createNewUser(values);
        this.props.resetCreateUser();
    }

    render() {
        const StateList = ({ states }) => {
            return (
                <>
                    <option value={null}>-Select-</option>
                    {states.map((states) => {
                        return (
                            <option key={states} value={states}>
                                {states}
                            </option>
                        );
                    })}
                </>
            );
        };
        return (
            <>
                <div className="container">
                    <Row>
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem>
                                    <Link to="/home">Home</Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <Link to="/about/join">Become a Member</Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem active>Create Account</BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                    </Row>
                    <Row className="row-content">
                        <div className="col-12">
                            <h3>Create Account</h3>
                            <hr />
                        </div>
                        <div className="col">
                            <Form model="createUser" onSubmit={(values) => this.handleSubmit(values)}>
                                <FormGroup className="form-row">
                                    <div className="col col-md-6">
                                        <Label htmlFor="acctFirstName">First Name:</Label>
                                        <Control.text className="form-control" id="acctFirstName" name="acctFirstName" model=".acctFirstName" validators={{ required, minLength: minLength(2) }} />
                                        <Errors
                                            className="text-danger"
                                            model=".acctFirstName"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                                minLength: "Must be at least 2 characters",
                                            }}
                                        />
                                    </div>
                                    <div className="col col-md-6">
                                        <Label htmlFor="acctLastName">Last Name:</Label>
                                        <Control.text className="form-control" id="acctLastName" name="acctLastName" model=".acctLastName" validators={{ required, minLength: minLength(2) }} />
                                        <Errors
                                            className="text-danger"
                                            model=".acctLastName"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                                minLength: "Must be at least 2 characters",
                                            }}
                                        />
                                    </div>
                                </FormGroup>
                                <FormGroup className="form-row">
                                    <div className="col-12 col-md-4">
                                        <Label htmlFor="acctUserName">Username:</Label>
                                        <Control.text className="form-control" id="acctUserName" name="acctUserName" model=".acctUserName" validators={{ required, minLength: minLength(6) }} />
                                        <Errors
                                            className="text-danger"
                                            model=".acctUserName"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                                minLength: "Must be at least 6 characters",
                                            }}
                                        />
                                    </div>
                                    <div className="col col-md-4">
                                        <Label htmlFor="acctPassword">Password:</Label>
                                        <Control.password className="form-control" id="acctPassword" name="acctPassword" model=".acctPassword" validators={{ required, validPassword }} />
                                        <Errors
                                            className="text-danger"
                                            model=".acctPassword"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                                validPassword: "7 to 15 characters which contain at least one numeric digit and a special character",
                                            }}
                                        />
                                    </div>
                                    <div className="col col-md-4">
                                        <Label htmlFor="acctConfPassword">Confirm Password:</Label>
                                        <Control.password className="form-control" id="acctConfPassword" name="acctConfPassword" model=".acctConfPassword" validators={{ required }} />
                                        <Errors
                                            className="text-danger"
                                            model=".acctConfPassword"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                                confirmPassword: "Passwords do not match",
                                            }}
                                        />
                                    </div>
                                </FormGroup>
                                <FormGroup className="form-row">
                                    <div className="col col-md-8">
                                        <Label htmlFor="acctEmail">Email:</Label>
                                        <Control.text className="form-control" id="acctEmail" name="acctEmail" model=".acctEmail" validators={{ required, validEmail }} />
                                        <Errors
                                            className="text-danger"
                                            model=".acctEmail"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                                validEmail: "Must be a valid email address",
                                            }}
                                        />
                                    </div>
                                    <div className="col col-md-4">
                                        <Label htmlFor="acctPhone">Phone Number:</Label>
                                        <Control.text className="form-control" id="acctPhone" name="acctPhone" model=".acctPhone" validators={{ required, minLength: minLength(10), maxLength: maxLength(15), isNumber }} />
                                        <Errors
                                            className="text-danger"
                                            model=".acctPhone"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                                minLength: "Must be at least 10 characters",
                                                maxLength: "Must be 15 charactors or less",
                                                isNumber: "Must be a number",
                                            }}
                                        />
                                    </div>
                                </FormGroup>
                                <FormGroup className="form-row">
                                    <div className="col-12 col-md-5">
                                        <Label htmlFor="acctAddress">Street Address:</Label>
                                        <Control.text className="form-control" id="acctAddress" name="acctAddress" model=".acctAddress" validators={{ required }} />
                                        <Errors
                                            className="text-danger"
                                            model=".acctEmail"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                            }}
                                        />
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <Label htmlFor="acctCity">City:</Label>
                                        <Control.text className="form-control" id="acctCity" name="acctCity" model=".acctCity" validators={{ required }} />
                                        <Errors
                                            className="text-danger"
                                            model=".acctCity"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                            }}
                                        />
                                    </div>
                                    <div className="col-4 col-md-2">
                                        <Label htmlFor="acctState">State:</Label>
                                        <Control.select className="form-control" id="acctState" name="acctState" model=".acctState" validators={{ required }}>
                                            <StateList states={this.props.states} />
                                        </Control.select>
                                        <Errors
                                            className="text-danger"
                                            model=".acctState"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "You must select a state",
                                            }}
                                        />
                                    </div>
                                    <div className="col-8 col-md-2">
                                        <Label htmlFor="acctZip">Zip:</Label>
                                        <Control.text className="form-control" id="acctZip" name="acctZip" model=".acctZip" validators={{ required, minLength: minLength(5), isNumber }} />
                                        <Errors
                                            className="text-danger"
                                            model=".acctZip"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                                minLength: "Must be at least 5 characters",
                                                isNumber: "Must be a number",
                                            }}
                                        />
                                    </div>
                                </FormGroup>
                                <br />
                                <FormGroup className="form-row">
                                    <Col>
                                        <p style={{ fontSize: "larger" }}>Would you like to set up automatic renewal?</p>
                                    </Col>
                                    <Col xs={"12"}>
                                        <div className="form-check form-check-inline">
                                            <Label check>
                                                <Control.checkbox className="form-check-input" id="autoRenew" name="autoRenew" model=".autoRenew" /> Yes, renew at $15 a year.
                                            </Label>
                                        </div>
                                    </Col>
                                </FormGroup>
                                <br />
                                <Card>
                                    <CardBody>
                                        <h3 className="card-title">Terms of Service</h3>
                                        <p>As an upstanding member of the Timpanogos Grotto, I agree to:</p>
                                        <ul>
                                            <li>
                                                Cave in a safe manner with the appropriate amount of gear as outlined in{" "}
                                                <a href="https://www.amazon.com/Alpine-Caving-Techniques-Complete-Efficient/dp/3908495105" target="_blank" rel="noopener noreferrer">
                                                    Alpine Caving Techniques.
                                                </a>
                                            </li>
                                            <li>
                                                Follow the current national decontamination protocol between caving trips, as detailed on{" "}
                                                <a href="https://www.whitenosesyndrome.org/" target="_blank" rel="noopener noreferrer">
                                                    whitenosesyndrome.org
                                                </a>
                                            </li>
                                            <li>File a trip report, in classic narrative or picture format, within 30 days of any Utah based cave trip at link.</li>
                                        </ul>
                                    </CardBody>
                                    <CardFooter>
                                        <div className="form-check">
                                            <Label check>
                                                <Control.checkbox required className="form-check-input" id="termsAgree" name="termsAgree" model=".termsAgree" /> I agree to the terms of service.
                                            </Label>
                                        </div>
                                    </CardFooter>
                                </Card>
                                <br />
                                <Row>
                                    <div className="col">
                                        <Button type="sumbit" value="sumbit" color="primary">
                                            Create Account
                                        </Button>
                                    </div>
                                </Row>
                            </Form>
                        </div>
                    </Row>
                </div>
            </>
        );
    }
}

export default CreateAccount;
