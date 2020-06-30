import React, { Component, useState } from "react";
import { Card, CardHeader, CardBody, Modal, ModalHeader, ModalBody, Button, Row, Collapse } from "reactstrap";
import ModalTabs from "./EventsModalTabsComponent";
import { FadeTransform, Fade, Stagger } from "react-animation-components";

const RenderEventsCard = ({ events }) => {
  const [isOpen, setIsOpen] = useState(null);

  const toggle = (event) => {
    if (!isOpen || event.id !== isOpen) {
      setIsOpen(event.id);
    } else if (isOpen === event.id) {
      setIsOpen(false);
    }
  };

  // const formatTripDate = (tripDate) => {
  //   var hours = tripDate.getHours();
  //   var minutes = tripDate.getMinutes();
  //   var ampm = hours >= 12 ? "pm" : "am";
  //   hours = hours % 12;
  //   hours = hours ? hours : 12; // the hour '0' should be '12'
  //   minutes = minutes < 10 ? "0" + minutes : minutes;
  //   var strTime = hours + ":" + minutes + " " + ampm;
  //   return tripDate.getMonth() + 1 + "/" + tripDate.getDate() + "/" + tripDate.getFullYear() + "  " + strTime;
  // }
  

  return (
    <>
      {events.map((event) => {
        if (event.eventName) {
          return (
            <Fade in key={event.id}>
              <Row>
                <h5>
                  {event.eventName} - {event.eventDate}
                </h5>
                <Button color="warning" onClick={() => toggle(event)} className="ml-auto btn btn-sm">
                  Details
                </Button>
              </Row>
              <Row>
                <div className="col">
                  <Collapse isOpen={event.id === isOpen} id={event.id}>
                    <Card width="100%" className="my-2" style={{ borderColor: "#4c5401" }}>
                      <CardBody>
                        <p>
                          <b>Event:</b> {event.eventName}
                        </p>
                        <p>
                          <b>Date:</b> {event.eventDate}
                        </p>
                        <p>
                          <b>Location:</b> {event.eventLoc}
                        </p>
                        <p>
                          <b>Details:</b> {event.eventDetails}
                        </p>
                      </CardBody>
                    </Card>
                  </Collapse>
                </div>
              </Row>
            </Fade>
          );
        }
        if (event.tripName) {
          return (
            <Fade in key={event.id}>
              <Row>
                <h5>
                  {event.tripName} - {event.tripDate}
                </h5>
                <Button color="warning" onClick={() => toggle(event)} className="ml-auto btn btn-sm">
                  Details
                </Button>
              </Row>
              <Row>
                <div className="col">
                  <Collapse isOpen={event.id === isOpen} id={event.id}>
                    <Card width="100%" className="my-2" style={{ borderColor: "#4c5401" }}>
                      <CardBody>
                        <Row>
                          <div className="col-6">
                            <p>
                              <b>Cave/Area:</b> {event.tripName}
                            </p>
                          </div>
                          <div className="col-6">
                            <p>
                              <b>Date:</b> {event.tripDate}
                            </p>
                          </div>
                        </Row>
                        <Row>
                          <div className="col">
                            <p>
                              <b>Trip Leader:</b> {event.tripLeader}
                            </p>
                          </div>
                          <div className="col">
                            <p>
                              <b>Trip Type:</b> {event.tripType}
                            </p>
                          </div>
                        </Row>
                        <Row>
                          <div className="col order-last">
                            <p>
                              <b>Capacity:</b> {event.tripSize}
                            </p>
                          </div>
                          <div className="col">
                            <p>
                              <b>Callout:</b> {event.tripCallout}
                            </p>
                          </div>
                        </Row>
                        <p>
                          <b>Callout Contact:</b> {event.tripCalloutTel}
                        </p>
                        <p>
                          <b>Callout Time:</b> {event.tripCalloutTime}
                        </p>
                        <p>
                          <b>Details:</b> {event.tripDetails}
                        </p>
                      </CardBody>
                    </Card>
                  </Collapse>
                </div>
              </Row>
            </Fade>
          );
        }
        return <div/>
      })}
    </>
  );
};

class EventCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    // this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };
  render() {
    return (
      <>
        <FadeTransform
          in
          transformProps={{
            exitTransform: "scale(.9) translateY(-5%)",
          }}
        >
          <Card className="mt-lg-5 scroll" style={{ width: "100%", maxHeight: "500px" }}>
            <CardHeader className="card-header-green">
              <Row>
                <h2 className="card-title text-light text-center">Upcoming Events</h2>
                <Button className="ml-auto btn btn-lg btn-outline-warning" type="button" color="warning" onClick={this.toggleModal}>
                  Create an Event
                </Button>
              </Row>
            </CardHeader>
            <CardBody>
              <Stagger in>
                <RenderEventsCard events={this.props.events} />
              </Stagger>
            </CardBody>
          </Card>
        </FadeTransform>
        <Modal fade isOpen={this.state.isModalOpen} toggle={this.toggleModal} className="modal-lg">
          <ModalHeader className="card-header-yellow d-flex justify-content-center" toggle={this.toggleModal}>
            <h2>
              <strong>Create an Event!</strong>
            </h2>
          </ModalHeader>
          <ModalBody>
            <ModalTabs toggleModal={this.toggleModal} postEvents={this.props.postEvents} resetEventForm={this.props.resetEventForm} resetTripForm={this.props.resetTripForm} />
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default EventCard;
