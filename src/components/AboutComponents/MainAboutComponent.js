import React, { useState } from "react";
import { TabContent, Nav, NavItem, NavLink, BreadcrumbItem, Breadcrumb } from "reactstrap";
import { Link } from "react-router-dom";
import AboutTab from "./AboutComponent";
import Officers from "./OfficerComponent";
import classnames from "classnames";

const About = (props) => {
    const [activeTab, setActiveTab] = useState("1");

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/home">Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>About Us</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Nav tabs justified>
                            <NavItem>
                                <NavLink
                                    href="#"
                                    className={classnames({ active: activeTab === "1" })}
                                    onClick={() => {
                                        toggle("1");
                                    }}
                                >
                                    {" "}
                                    About
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
                                    {" "}
                                    Meet the Officers
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="#"
                                    className={classnames({ active: activeTab === "3" })}
                                    onClick={() => {
                                        toggle("3");
                                    }}
                                >
                                    {" "}
                                    FAQ
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="#"
                                    className={classnames({ active: activeTab === "4" })}
                                    onClick={() => {
                                        toggle("4");
                                    }}
                                >
                                    {" "}
                                    Become a Member
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <AboutTab factscard={props.factscard} />
                            <Officers officers={props.officers}/>
                        </TabContent>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;
