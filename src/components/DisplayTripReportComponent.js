import React from "react";
import { BreadcrumbItem, Breadcrumb, Row } from "reactstrap";
import { Link } from "react-router-dom";

const DisplayReport = ({ recentTrips, tripId }) => {
  return (
    <>
      <div className="container">
        {recentTrips
          .filter(item => {
            return +item.id === +tripId;
          })
          .map(item => {
            return (
              <>
                <Row key={item.id}>
                  <div className="col">
                    <Breadcrumb>
                      <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                      </BreadcrumbItem>
                      <BreadcrumbItem>
                        <Link to="/events">News & Events</Link>
                      </BreadcrumbItem>
                      <BreadcrumbItem active>{item.reportTitle}</BreadcrumbItem>
                    </Breadcrumb>
                  </div>
                </Row>
                <Row className="row-content">
                  <div className="col-12">
                    <h2>
                      <strong>{item.reportTitle}</strong>
                    </h2>
                  </div>
                  <div className="col-12">
                    <p>By {item.reportAuthor}</p>
                  </div>
                  <div className="col-12">
                    <p>{item.reportTripDate}</p>
                  </div>
                  <div className="col">{item.reportText}</div>
                </Row>
              </>
            );
          })}
      </div>
    </>
  );
};

export default DisplayReport;
