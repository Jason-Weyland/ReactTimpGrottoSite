import React from "react";
import EventsCard from "./EventsCardComponent";
import { BreadcrumbItem, Breadcrumb, Row } from "reactstrap";
import { Link } from "react-router-dom";

const Events = ({ events, postEvents, resetTripForm, resetEventForm }) => {
  return (
    <>
      <div className="container">
        <Row>
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>News & Events</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </Row>
        <Row className="d-flex justify-content-center">
          <h2 className="mt-3">
            <strong>Grotto Events</strong>
          </h2>
        </Row>
        <Row className="row-content">
          <div className="col-md-6">
            <EventsCard events={events} postEvents={postEvents} resetEventForm={resetEventForm} resetTripForm={resetTripForm} />
          </div>
        </Row>
      </div>
    </>
  );
};

export default Events;
