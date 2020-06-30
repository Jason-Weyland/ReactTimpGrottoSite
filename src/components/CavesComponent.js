import React from "react";
import { Breadcrumb, BreadcrumbItem, Row } from "reactstrap";
import { Link } from "react-router-dom";

const Caves = ({ cavesDT }) => {
  return (
    <>
      <div className="container">
        <Row>
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Caves</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </Row>
        <Row className="row-content">
          <div className="col">
            <h3 className='d-flex justify-content-center'>Utah Cave Density</h3>
            <img src="\assets\images\caveDensity.jpg" alt="Utah Cave Density" width="100%" />
          </div>
        </Row>
        <Row className="row-content">
          <div className="col">
            <h2>
              <strong>Utah's Closed Cave List</strong>
            </h2>
            <div className="table-responsive">
              <table className="table table-striped table-secondary">
                <thead>
                  <tr className="bg-dark text-light">
                    <th></th>
                    <th>Closure</th>
                    <th>When to visit</th>
                  </tr>
                </thead>
                <tbody>
                  {cavesDT.map((item) => {
                    return (
                      <tr key={item.id}>
                        <th>{item.cave}</th>
                        <td>{item.closure}</td>
                        <td>{item.whenToVisit}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Row>
      </div>
    </>
  );
};

export default Caves;
