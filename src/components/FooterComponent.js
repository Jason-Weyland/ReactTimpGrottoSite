import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-md-2 offset-md-1 align-self-center">
                        <h3>
                            <strong>Links</strong>
                        </h3>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/about/FAQ">FAQ</Link>
                            </li>
                            <li>
                                <Link to="/events">News & Events</Link>
                            </li>
                            <li>
                                <Link to="/caves">Caves</Link>
                            </li>
                            <li>
                                <Link to="/about/join">Join Us</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-8 col-md-4 align-self-center">
                        <div className="row">
                            <div className="col-12 offset-2">
                                <a href="http://www.caves.org" target="_blank" rel="noopener noreferrer">
                                    <img src="assets/images/nss_logo_color.gif" alt="NSS Logo" width="60%" />
                                </a>
                            </div>
                            <div className="col">
                                <p className="text-center">
                                    For more info about the NSS visit
                                    <a href="http://www.caves.org" target="_blank" rel="noopener noreferrer" className="text-dark">
                                        <u>caves.org</u>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 align-self-center">
                        <h5>Contact</h5>
                        <a role="button" className="btn btn-link text-dark" href="mailto:timpgrotto@gmail.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-envelope-o" /> timpgrotto@gmail.com
                        </a>
                        <br />
                        <a role="button" className="btn btn-link text-dark" href="https://www.google.com/maps/place/Orem+Public+Library/@40.298669,-111.69467,15z/data=!4m5!3m4!1s0x0:0x595700ed210f2254!8m2!3d40.298669!4d-111.69467" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-map" /> 58 N State St, Orem, UT 84057
                        </a>
                        <p>Meetings: Third Tuesday of each month @ 7:00p.m. MST</p>
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram my-1" href="https://www.instagram.com/timp.grotto/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-instagram" />
                        </a>{" "}
                        <a className="btn btn-social-icon btn-facebook my-1" href="https://www.facebook.com/timpanogosgrotto/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-facebook" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
