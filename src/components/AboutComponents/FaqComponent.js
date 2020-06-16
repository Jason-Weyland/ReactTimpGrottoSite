import React from "react";
import { Accordion, AccordionCollapse, Button, Card, AccordionToggle } from "react-bootstrap";
import { TabPane, Row } from "reactstrap";

const FaqTab = ({ faq }) => {
    return (
        <TabPane fade="true" tabId="faq">
            <Row className="row-content">
                <div className="col-12 col-lg-5 col-xl-4 order-lg-last">
                    <img className="d-none d-lg-inline align-self-center mt-5" src="/assets/images/mdOverflow.jpg" id="mdHall" alt="Main Drain Hall" width="100%" height="auto" />
                    <img className="d-lg-none" src="/assets/images/mdHall Cropped.jpg" id="mdHall" alt="Main Drain Hall" width="100%" height="auto" />
                </div>
                <div className="col">
                    <h2>
                        <strong>Freqently Asked Questions</strong>
                    </h2>
                    <Accordion defaultActiveKey="0" className="mt-5">
                        {faq.map((faq) => {
                            return (
                                <Card key={faq.id}>
                                    <Card.Header>
                                        <Accordion.Toggle className="text-dark" as={Button} variant="link" eventKey={faq.id}>
                                            {faq.header}
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={faq.id}>
                                        <Card.Body>{faq.text}</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            );
                        })}
                    </Accordion>
                </div>
            </Row>
        </TabPane>
    );
};

export default FaqTab;
