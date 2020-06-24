import React, { Component } from "react";
import { BreadcrumbItem, Breadcrumb, Row, Col, FormGroup, Label, Card, CardBody, CardFooter, Button } from "reactstrap";
import { LocalForm, Control, Errors } from "react-redux-form";
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
            userFirstName: "",
            userLastName: "",
            userUserName: "",
            userPassword: "",
            userEmail: "",
            userPhone: "",
            userAddress: "",
            userCity: "",
            userState: "",
            userZip: "",
            touched: {
                userFirstName: false,
                userLastName: false,
                userUserName: false,
                userPasswor: false,
                userEmail: false,
                userPhone: false,
                userAddress: false,
                userCity: false,
                userState: false,
                userZip: false,
            },
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
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
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)} action="https://www.paypal.com/cgi-bin/webscr">
                                <FormGroup className="form-row">
                                    <div className="col col-md-6">
                                        <Label htmlFor="userFirstName">First Name:</Label>
                                        <Control.text className="form-control" id="userFirstName" name="userFirstName" model=".userFirstName" validators={{ required, minLength: minLength(2) }} />
                                        <Errors
                                            className="text-danger"
                                            model=".userFirstName"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                                minLength: "Must be at least 2 characters",
                                            }}
                                        />
                                    </div>
                                    <div className="col col-md-6">
                                        <Label htmlFor="userLastName">Last Name:</Label>
                                        <Control.text className="form-control" id="userLastName" name="userLastName" model=".userLastName" validators={{ required, minLength: minLength(2) }} />
                                        <Errors
                                            className="text-danger"
                                            model=".userLastName"
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
                                        <Label htmlFor="userUserName">Username:</Label>
                                        <Control.text className="form-control" id="userUserName" name="userUserName" model=".userUserName" validators={{ required, minLength: minLength(6) }} />
                                        <Errors
                                            className="text-danger"
                                            model=".userUserName"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                                minLength: "Must be at least 6 characters",
                                            }}
                                        />
                                    </div>
                                    <div className="col col-md-4">
                                        <Label htmlFor="userPassword">Password:</Label>
                                        <Control.password className="form-control" id="userPassword" name="userPassword" model=".userPassword" validators={{ required, validPassword }} />
                                        <Errors
                                            className="text-danger"
                                            model=".userPassword"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                                validPassword: "7 to 15 characters which contain at least one numeric digit and a special character",
                                            }}
                                        />
                                    </div>
                                    <div className="col col-md-4">
                                        <Label htmlFor="userConfPassword">Confirm Password:</Label>
                                        <Control.password className="form-control" id="userConfPassword" name="userConfPassword" model=".userConfPassword" validators={{ required }} />
                                        <Errors
                                            className="text-danger"
                                            model=".userConfPassword"
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
                                        <Label htmlFor="userEmail">Email:</Label>
                                        <Control.text className="form-control" id="userEmail" name="userEmail" model=".userEmail" validators={{ required, validEmail }} />
                                        <Errors
                                            className="text-danger"
                                            model=".userEmail"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                                validEmail: "Must be a valid email address",
                                            }}
                                        />
                                    </div>
                                    <div className="col col-md-4">
                                        <Label htmlFor="userPhone">Phone Number:</Label>
                                        <Control.text className="form-control" id="userPhone" name="userPhone" model=".userPhone" validators={{ required, minLength: minLength(10), maxLength: maxLength(15), isNumber }} />
                                        <Errors
                                            className="text-danger"
                                            model=".userPhone"
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
                                        <Label htmlFor="userAddress">Street Address:</Label>
                                        <Control.text className="form-control" id="userAddress" name="userAddress" model=".userAddress" validators={{ required }} />
                                        <Errors
                                            className="text-danger"
                                            model=".userEmail"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                            }}
                                        />
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <Label htmlFor="userCity">City:</Label>
                                        <Control.text className="form-control" id="userCity" name="userCity" model=".userCity" validators={{ required }} />
                                        <Errors
                                            className="text-danger"
                                            model=".userCity"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                            }}
                                        />
                                    </div>
                                    <div className="col-4 col-md-2">
                                        <Label htmlFor="userState">State:</Label>
                                        <Control.select className="form-control" id="userState" name="userState" model=".userState" validators={{ required }}>
                                            <StateList states={this.props.states} />
                                        </Control.select>
                                        <Errors
                                            className="text-danger"
                                            model=".userState"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "You must select a state",
                                            }}
                                        />
                                    </div>
                                    <div className="col-8 col-md-2">
                                        <Label htmlFor="userZip">Zip:</Label>
                                        <Control.text className="form-control" id="userZip" name="userZip" model=".userZip" validators={{ required, minLength: minLength(5), isNumber }} />
                                        <Errors
                                            className="text-danger"
                                            model=".userZip"
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
                                        <div className="form-check">
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
                            </LocalForm>
                        </div>
                    </Row>
                </div>
            </>
        );
    }
}

export default CreateAccount;
