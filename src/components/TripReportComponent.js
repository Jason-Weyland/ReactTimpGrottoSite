import React, { Component } from "react";
import { Row, BreadcrumbItem, Breadcrumb, FormGroup, Label, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Errors, Control, Form } from "react-redux-form";

const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const validPassword = val => /^^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/i.test(val);

class TripReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reportTitle: "",
      reportAuthor: "",
      reportTripDate: "",
      reportPhoto: "",
      reportText: "",
      touched: {
        reportTitle: false,
        reportAuthor: false,
        reportTripDate: false,
        reportText: false,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.resetTripReportForm();
    this.props.postTripReport(values);
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
                <BreadcrumbItem>
                  <Link to="/events">News & Events</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Submit a Trip Report</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Row>
          <Row>
            <div className="col">
              <h2>
                <strong>Submit a Trip Report</strong>
              </h2>
            </div>
          </Row>
          <Row>
            <div className="col">
              <Form model="tripReportForm" onSubmit={values => this.handleSubmit(values)}>
                <FormGroup className="form-row">
                  <div className="col">
                    <Label htmlFor="reportTitle" />
                    Title
                    <Control.text className="form-control" name="reportTitle" id="reportTitle" model=".reportTitle" placeholder="Title of Report" validators={{ required, minLength: minLength(2) }} />
                    <Errors
                      className="text-danger"
                      model=".reportTitle"
                      show="touched"
                      component="div"
                      messages={{
                        required: "Required",
                        minLength: "Must be at least 2 characters",
                      }}
                    />
                  </div>
                  <div className="col">
                    <Label htmlFor="reportAuthor" />
                    Author
                    <Control.text className="form-control" name="reportAuthor" id="reportAuthor" model=".reportAuthor" placeholder="Report Author" validators={{ required, minLength: minLength(2) }} />
                    <Errors
                      className="text-danger"
                      model=".reportAuthor"
                      show="touched"
                      component="div"
                      messages={{
                        required: "Required",
                        minLength: "Must be at least 2 characters",
                      }}
                    />
                  </div>
                  <div className="col">
                    <Label htmlFor="reportTripDate" />
                    Trip Date
                    <Control type="date" className="form-control" name="reportTripDate" id="reportTripDate" model=".reportTripDate" validators={{ required }} />
                    <Errors
                      className="text-danger"
                      model=".reportTripDate"
                      show="touched"
                      component="div"
                      messages={{
                        required: "Required",
                      }}
                    />
                  </div>
                </FormGroup>
                <FormGroup className="form-row">
                  <div className="col">
                    <Label htmlFor="reportText" />
                    Trip Report
                    <Control.textarea className="form-control" name="reportText" id="reportText" model=".reportText" rows="15" validators={{ required, minLength: minLength(150) }} />
                    <Errors
                      className="text-danger"
                      model=".reportText"
                      show="touched"
                      component="div"
                      messages={{
                        required: "Required",
                        minLength: "Must be at least 150 characters",
                      }}
                    />
                  </div>
                </FormGroup>
                <FormGroup className="form-row">
                  <div className="col-3">
                    <Label htmlFor="reportPhoto" />
                    Upload a photo
                    <Control type="file" className="form-control" name="reportPhoto" id="reportPhoto" model=".reportPhoto" />
                  </div>
                </FormGroup>
                <FormGroup className="form-row">
                  <Button type="submit" value="submit" color="primary">
                    Submit Trip Report
                  </Button>
                </FormGroup>
              </Form>
            </div>
          </Row>
        </div>
      </>
    );
  }
}

export default TripReport;
