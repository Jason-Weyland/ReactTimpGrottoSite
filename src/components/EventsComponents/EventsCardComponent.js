import React, { Component } from "react";
import { Card, CardHeader, CardBody, Modal, ModalHeader, ModalBody, Button, Row } from "reactstrap";
import ModalTabs from "./EventsModalTabsComponent";
import { FadeTransform, Fade, Stagger } from "react-animation-components";

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
    const RenderEventsCard = ({ events }) => {
      return (
        <>
          {events.map((event) => {
            if (event.eventName) {
              return (
                <Row key={event.id}>
                  <Fade in>
                    <div className="col-12 bg-light">
                      <h4>{event.eventDate} - Grotto Event</h4>
                    </div>
                    <div className="col-10 offset-sm-1">
                      <p>{event.eventName}</p>
                    </div>
                  </Fade>
                </Row>
              );
            }
            if (event.tripName) {
              return (
                <Row key={event.id}>
                  <Fade in>
                    <div className="col-12 bg-light">
                      <h4>{event.tripDate} - Cave Trip</h4>
                    </div>
                    <div className="col-10 offset-sm-1">
                      <p>{event.tripName}</p>
                    </div>
                  </Fade>
                </Row>
              );
            }
          })}
        </>
      );
    };

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
                <Button className="ml-auto btn btn-lg" type="button" color="warning" onClick={this.toggleModal}>
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
