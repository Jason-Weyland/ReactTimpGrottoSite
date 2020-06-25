import React, { Component } from "react";
import { Form, Control, Errors } from "react-redux-form";
import { Row, FormGroup, TabPane, Button } from "reactstrap";

class ModalForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: "",
      eventDate: "",
      eventLoc: "",
      eventDetails: "",
      tripName: '',
      tripDate: '',
      tripType: '',
      tripLeader: '',
      tripSize: '',
      tripCallout: '',
      tripCalloutTel: '',
      tripCalloutTime: '',
      tripDetails: '',
      touched: {
        eventName: false,
        eventDate: false,
        eventLoc: false,
        eventDetails: false,
        tripName: false,
        tripDate: false,
        tripType: false,
        tripLeader: false,
        tripSize: false,
        tripCallout: false,
        tripCalloutTel: false,
        tripCalloutTime: false,
        tripDetails: false,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.postEvents(values);
    this.props.resetEventForm();
    this.props.resetTripForm();
  }

  render() {
    return (
      <>
        <TabPane fade={true} tabId="1">
          <Row>
            <div className="col">
              <Form model='eventForm' onSubmit={(values) => this.handleSubmit(values)} className="mt-3">
                <FormGroup className="form-row">
                  <div className="col-6">
                    <Control.text className="form-control" name="eventName" id="eventName" model=".eventName" placeholder="Name of Event" />
                  </div>
                  <div className="col-6">
                    <Control type="date" className="form-control" name="eventDate" id="eventDate" model=".eventDate" />
                  </div>
                </FormGroup>
                <FormGroup className="form-row">
                  <div className="col-12">
                    <Control.text className="form-control" name="eventLoc" id="eventLoc" model=".eventLoc" placeholder="Location of Event" />
                  </div>
                </FormGroup>
                <FormGroup className="form-row">
                  <div className="col">
                    <Control.textarea className="form-control" name="eventDetails" id="eventDetails" model=".eventDetails" placeholder="Event Details..." rows="10" />
                  </div>
                </FormGroup>
                <FormGroup className="form-row d-flex justify-content-center">
                  <Button type="submit" value="submit" color="primary">
                    Submit
                  </Button>
                  <Button className="ml-1" type="button" color="secondary" onClick={this.props.toggleModal}>
                    Cancel
                  </Button>
                </FormGroup>
              </Form>
            </div>
          </Row>
        </TabPane>
        <TabPane fade={true} tabId="2">
          <Row>
            <div className="col">
              <Form model='tripForm' onSubmit={(values) => this.handleSubmit(values)} className="mt-3">
                <FormGroup className="form-row">
                  <div className="col-6 col-md-4">
                    <Control.text className="form-control" name="tripName" id="tripName" model=".tripName" placeholder="Cave/Area Visiting" />
                  </div>
                  <div className="col-6 col-md-4">
                    <Control type="date" className="form-control" name="tripDate" id="tripDate" model=".tripDate" />
                  </div>
                  <div className="col-12 col-md-4 mt-2 mt-md-0">
                    <Control.select className="form-control" name="tripType" id="tripType" model=".tripType">
                      <option value={null}>-Type of Trip-</option>
                      <option value="recreational">Recreational</option>
                      <option value="survey">Survey</option>
                      <option value="rigging">Rigging</option>
                      <option value="bolting">Bolting</option>
                      <option value="bio/paleo">Bio/Paleo</option>
                      <option value="ridgewalking">Ridge Walking</option>
                    </Control.select>
                  </div>
                </FormGroup>
                <FormGroup className="form-row">
                  <div className="col-6 col-md-8">
                    <Control.text className="form-control" name="tripLeader" id="tripLeader" model=".tripLeader" placeholder="Trip Leader" />
                  </div>
                  <div className="col-6 col-md-4">
                    <Control.select className="form-control" name="tripSize" id="tripSize" model=".tripSize">
                      <option value={null}>Group Size</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="10+">10+</option>
                    </Control.select>
                  </div>
                </FormGroup>
                <FormGroup className="form-row">
                  <div className="col-6 col-lg-3">
                    <Control.text className="form-control" name="tripCallout" id="tripCallout" model=".tripCallout" placeholder="Callout" />
                  </div>
                  <div className="col-6 col-lg-4">
                    <Control.text className="form-control" name="tripCalloutTel" id="tripCalloutTel" model=".tripCalloutTel" placeholder="Callout Contact Num" />
                  </div>
                  <div className="col-12 col-lg-5 mt-2 mt-lg-0">
                    <Control type="datetime-local" className="form-control" name="tripCalloutTime" id="tripCalloutTime" model=".tripCalloutTime" />
                  </div>
                </FormGroup>
                <FormGroup className="form-row">
                  <div className="col">
                    <Control.textarea className="form-control" name="tripDetails" id="tripDetails" model=".tripDetails" placeholder="Trip Details..." rows="5" />
                  </div>
                </FormGroup>
                <FormGroup className="form-row d-flex justify-content-center">
                  <Button type="submit" value="submit" color="primary">
                    Submit
                  </Button>
                  <Button className="ml-1" type="button" onClick={this.props.toggleModal}>
                    Cancel
                  </Button>
                </FormGroup>
              </Form>
            </div>
          </Row>
        </TabPane>
      </>
    );
  }
}

export default ModalForms;
