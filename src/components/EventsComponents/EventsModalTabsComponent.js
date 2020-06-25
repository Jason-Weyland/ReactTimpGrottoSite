import React, { useState } from "react";
import { Row, TabContent, Nav, NavLink, NavItem } from "reactstrap";
import classnames from "classnames";
import ModalForms from "./EventsModalFormComponent";

const ModalTabs = ({ toggleModal, postEvents, resetEventForm, resetTripForm }) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <>
      <div className="container">
        <Row className="d-flex justify-content-center">
          <Nav pills>
            <NavItem>
              <NavLink
                href="#"
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                Grotto Event
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                Cave Trip
              </NavLink>
            </NavItem>
          </Nav>
        </Row>
        <TabContent activeTab={activeTab}>
          <ModalForms toggleModal={toggleModal} postEvents={postEvents} resetEventForm={resetEventForm} resetTripForm={resetTripForm} />
        </TabContent>
      </div>
    </>
  );
};

export default ModalTabs;
