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
      memberFirstName: "",
      memberLastName: "",
      memberUserName: "",
      memberPassword: "",
      memberConfPassword: "",
      memberEmail: "",
      memberPhone: "",
      memberAddress: "",
      memberCity: "",
      memberState: "",
      memberZip: "",
      memberautoRenew: false,
      membertermsAgree: false,
      touched: {
        memberFirstName: false,
        memberLastName: false,
        memberUserName: false,
        memberPasswor: false,
        memberEmail: false,
        memberPhone: false,
        memberAddress: false,
        memberCity: false,
        memberState: false,
        memberZip: false,
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.createNewUser(values);
    this.props.resetMemberForm();
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
              <Form model="memberForm" onSubmit={(values) => this.handleSubmit(values)}>
                <FormGroup className="form-row">
                  <div className="col col-md-6">
                    <Label htmlFor="memberFirstName">First Name:</Label>
                    <Control.text className="form-control" id="memberFirstName" name="memberFirstName" model=".memberFirstName" validators={{ required, minLength: minLength(2) }} />
                    <Errors
                      className="text-danger"
                      model=".memberFirstName"
                      show="touched"
                      component="div"
                      messages={{
                        required: "Required",
                        minLength: "Must be at least 2 characters",
                      }}
                    />
                  </div>
                  <div className="col col-md-6">
                    <Label htmlFor="memberLastName">Last Name:</Label>
                    <Control.text className="form-control" id="memberLastName" name="memberLastName" model=".memberLastName" validators={{ required, minLength: minLength(2) }} />
                    <Errors
                      className="text-danger"
                      model=".memberLastName"
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
                    <Label htmlFor="memberUserName">Username:</Label>
                    <Control.text className="form-control" id="memberUserName" name="memberUserName" model=".memberUserName" validators={{ required, minLength: minLength(6) }} />
                    <Errors
                      className="text-danger"
                      model=".memberUserName"
                      show="touched"
                      component="div"
                      messages={{
                        required: "Required",
                        minLength: "Must be at least 6 characters",
                      }}
                    />
                  </div>
                  <div className="col col-md-4">
                    <Label htmlFor="memberPassword">Password:</Label>
                    <Control.password className="form-control" id="memberPassword" name="memberPassword" model=".memberPassword" validators={{ required, validPassword }} />
                    <Errors
                      className="text-danger"
                      model=".memberPassword"
                      show="touched"
                      component="div"
                      messages={{
                        required: "Required",
                        validPassword: "7 to 15 characters which contain at least one numeric digit and a special character",
                      }}
                    />
                  </div>
                  <div className="col col-md-4">
                    <Label htmlFor="memberConfPassword">Confirm Password:</Label>
                    <Control.password className="form-control" id="memberConfPassword" name="memberConfPassword" model=".memberConfPassword" validators={{ required }} />
                    <Errors
                      className="text-danger"
                      model=".memberConfPassword"
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
                    <Label htmlFor="memberEmail">Email:</Label>
                    <Control.text className="form-control" id="memberEmail" name="memberEmail" model=".memberEmail" validators={{ required, validEmail }} />
                    <Errors
                      className="text-danger"
                      model=".memberEmail"
                      show="touched"
                      component="div"
                      messages={{
                        required: "Required",
                        validEmail: "Must be a valid email address",
                      }}
                    />
                  </div>
                  <div className="col col-md-4">
                    <Label htmlFor="memberPhone">Phone Number:</Label>
                    <Control.text className="form-control" id="memberPhone" name="memberPhone" model=".memberPhone" validators={{ required, minLength: minLength(10), maxLength: maxLength(15), isNumber }} />
                    <Errors
                      className="text-danger"
                      model=".memberPhone"
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
                    <Label htmlFor="memberAddress">Street Address:</Label>
                    <Control.text className="form-control" id="memberAddress" name="memberAddress" model=".memberAddress" validators={{ required }} />
                    <Errors
                      className="text-danger"
                      model=".memberEmail"
                      show="touched"
                      component="div"
                      messages={{
                        required: "Required",
                      }}
                    />
                  </div>
                  <div className="col-12 col-md-3">
                    <Label htmlFor="memberCity">City:</Label>
                    <Control.text className="form-control" id="memberCity" name="memberCity" model=".memberCity" validators={{ required }} />
                    <Errors
                      className="text-danger"
                      model=".memberCity"
                      show="touched"
                      component="div"
                      messages={{
                        required: "Required",
                      }}
                    />
                  </div>
                  <div className="col-4 col-md-2">
                    <Label htmlFor="memberState">State:</Label>
                    <Control.select className="form-control" id="memberState" name="memberState" model=".memberState" validators={{ required }}>
                      <StateList states={this.props.states} />
                    </Control.select>
                    <Errors
                      className="text-danger"
                      model=".memberState"
                      show="touched"
                      component="div"
                      messages={{
                        required: "You must select a state",
                      }}
                    />
                  </div>
                  <div className="col-8 col-md-2">
                    <Label htmlFor="memberZip">Zip:</Label>
                    <Control.text className="form-control" id="memberZip" name="memberZip" model=".memberZip" validators={{ required, minLength: minLength(5), isNumber }} />
                    <Errors
                      className="text-danger"
                      model=".memberZip"
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
                        <Control.checkbox className="form-check-input" id="memberautoRenew" name="memberautoRenew" model=".memberautoRenew" /> Yes, renew at $15 a year.
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
                        <Control.checkbox required className="form-check-input" id="membertermsAgree" name="membertermsAgree" model=".membertermsAgree" /> I agree to the terms of service.
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
