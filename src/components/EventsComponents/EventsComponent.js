import React from "react";
import EventsCard from "./EventsCardComponent";
import RecentTrips from "./RecentTripsCardComponent";
import TripsCarousel from "./RecentTripsCarouselComponent";
import { BreadcrumbItem, Breadcrumb, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { FadeTransform } from "react-animation-components";

const Events = ({ events, postEvents, resetTripForm, resetEventForm, recentTrips, tripsCarousel }) => {
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
        <FadeTransform
          in
          transformProps={{
            exitTransform: "scale(.9) translateY(-5%)",
          }}
        >
          <Row className="d-flex justify-content-center">
            <h2 className="mt-3">
              <strong>Grotto Events</strong>
            </h2>
          </Row>
          <Row className="row-content">
            <div className="col-md-6">
              <EventsCard events={events} postEvents={postEvents} resetEventForm={resetEventForm} resetTripForm={resetTripForm} />
            </div>
            <div className="col-12 col-lg-6 mt-4 mt-lg-0">
              <h3 className="text-center">
                <strong>Grotto Calendar</strong>
              </h3>
              <iframe title="grottoCalendar" class="calendar" src="https://calendar.google.com/calendar/embed?src=jason.weyland13%40gmail.com&ctz=America%2FNew_York" width="100%" height="500px" frameborder="0" scrolling="no"></iframe>
            </div>
          </Row>
          <Row className="d-flex justify-content-center">
            <h2 className="mt-3">
              <strong>Recent News</strong>
            </h2>
          </Row>
          <Row className="row-content">
            <div className="col-12 col-lg-6 order-last order-lg-first">
              <TripsCarousel tripsCarousel={tripsCarousel} />
            </div>
            {/* <div className="col-12 d-flex justify-content-center col-lg-5 my-2 order-last order-lg-first offset-lg-1 align-self-center">
              <div className="fb-page" data-href="https://www.facebook.com/timpanogosgrotto/" data-tabs="timeline" style={{ width: 500 }} data-height="auto" data-small-header="false" data-adapt-container-width={true} data-hide-cover="false" data-show-facepile="true">
                <blockquote cite="https://www.facebook.com/timpanogosgrotto/" className="fb-xfbml-parse-ignore">
                  <a href="https://www.facebook.com/timpanogosgrotto/">Timpanogos Grotto</a>
                </blockquote>
              </div>
            </div> */}
            <div className="col-12 col-lg-6">
              <RecentTrips recentTrips={recentTrips} />
            </div>
          </Row>
        </FadeTransform>
      </div>
    </>
  );
};

export default Events;
