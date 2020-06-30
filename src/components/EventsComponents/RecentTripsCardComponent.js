import React, { Component } from "react";
import { Card, CardHeader, CardBody, Row } from "reactstrap";
import { Link } from "react-router-dom";

class RecentTrips extends Component {
  render() {
    return (
      <>
        <Card className="scroll" style={{ width: "100%", maxHeight: "500px" }}>
          <CardHeader className="card-header-green">
            <Row>
              <h2 className="text-light card-title">Recent Trips</h2>
              <Link to="/submit-a-trip-report" type="button" className="btn btn-outline-warning btn-lg ml-auto">
                Submit a trip report
              </Link>
            </Row>
          </CardHeader>
          <CardBody>
            {this.props.recentTrips.map(trip => {
              return (
                <Link to={`/trip-report/${trip.id}`} key={trip.id} className='text-dark'>
                  <h5>
                    {trip.reportTitle} by {trip.reportAuthor}
                  </h5>
                </Link>
              );
            })}
          </CardBody>
        </Card>
      </>
    );
  }
}

export default RecentTrips;
