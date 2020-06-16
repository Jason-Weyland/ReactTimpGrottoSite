import React from "react";
import { TabPane, Row, Card, CardBody, CardHeader } from "reactstrap";

const FactsCard = ({ factscard }) => {
    return (
        <Card>
            <CardHeader className="card-header-green">
                <h3 className="text-light">Facts about the Timpagnogos Grotto</h3>
            </CardHeader>
            <CardBody>
                <dl className="row">
                    {factscard.map((fact) => {
                        return (
                            <React.Fragment key={fact.id}>
                                <dt className="col-6">{fact.dataTitle}</dt>
                                <dd className="col-6">{fact.dataDescription}</dd>
                            </React.Fragment>
                        );
                    })}
                </dl>
            </CardBody>
        </Card>
    );
};

const AboutTab = ({ factscard }) => {
    return (
        <TabPane fade="true" tabId="us">
            <Row>
                <div className="col">
                    <Card className="mt-5 text-center bg-light">
                        <CardBody>
                            <blockquote className="blockquote" cite="http://extraordinarywls.blogspot.com/search?q=quote">
                                <p className="mb-0">“When I cave, I feel a connection to the Creator. The beauty leaves me speechless. The awesomeness of it all is breathtaking.”</p>
                                <footer className="blockquote-footer">
                                    Carole Devillers,
                                    <cite title="Source Title"> Extraordinary Women Leaders in Speleology</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </Row>
            <Row className="row-content">
                <div className="col-12 col-md-4 order-last order-md-first">
                    <img id="flowStone" className="align-self-center d-flex mr-5 img-thumbnail" src="/assets/images/flowStone.jpg" alt="Flow Stone" width="100%" height="auto" />
                </div>
                <div className="col-12 col-md-8">
                    <h2>
                        <strong>What is the Timpanogos Grotto?</strong>
                    </h2>
                    <p>
                        The Timpanogos Grotto was established September 25, 1974 as a local chapter of the National Speleological Society (NSS), “...to promote interest in and to advance in any and all ways the study and science of Speleology, to promote the protection of caves and their natural
                        contents, and to promote fellowship among those interested therein."
                    </p>
                    <div className="col">
                        <FactsCard factscard={factscard} />
                    </div>
                </div>
            </Row>
            <Row className="row-content">
                <div className="col-12 col-md-8">
                    <h2>
                        <strong>Meetings</strong>
                    </h2>
                    <p>
                        <strong>We invite everybody to attend our monthly grotto meetings.</strong>
                    </p>
                    <p>
                        The Timpanogos Grotto meets in the Orem City Library basement meeting room located at 58 N. State Street - Orem, Utah. The program for our meetings varies. What you can expect: We often share caving trips from the last month, have a presentation, and cave trips are often
                        planned at meetings. Some grotto meetings focus on practicing vertical skills, in which meetings will take place elsewhere. In this case, the meeting place will be posted in advance either on the calendar or our facebook page.
                    </p>
                    <p>Time: 7:00 PM to 8:00 PM</p>
                    <p>We hold our grotto meetings on the third Tuesday of each month at the orem Library.</p>
                    <a role="button" className="btn btn-link" href="https://www.google.com/maps/place/Orem+Public+Library/@40.298669,-111.69467,15z/data=!4m5!3m4!1s0x0:0x595700ed210f2254!8m2!3d40.298669!4d-111.69467" target="_blank">
                        <i className="fa fa-map"></i> Orem Public Library
                    </a>
                </div>
                <div className="col-12 col-md-4">
                    <img className="align-self-center img-thumbnail" src="/assets/images/lbccShadow.jpg" alt="Little Brush Creek Cave" width="100%" height="auto" />
                </div>
            </Row>
            <Row className="row-content">
                <div className="col-6 col-md-4 order-last order-sm-first">
                    <img className="align-self-center img-thumbnail" id="spanishMoss" src="/assets/images/spanishMoss.jpg" alt="Spanish Moss" width="100%" height="auto" />
                </div>
                <div className="col-12 col-md-8">
                    <h2>
                        <strong>Caving Ethics</strong>
                    </h2>
                    <p>As stewards of the underground environment, Timpanogos Grotto members adhere to a strong “moral” code of caving ethics.</p>
                    <p>The NSS and Timpanogos Grotto believe:</p>
                    <ul>
                        <li>Caves have unique scientific, recreational, and scenic values;</li>
                        <li>These values are endangered by both carelessness and intentional vandalism.</li>
                        <li>These values, once gone, cannot be recovered.</li>
                        <li>The responsibility for protecting caves must be formed by those who study and enjoy them.</li>
                    </ul>
                    <p>
                        All contents of a cave — formations, life, and loose deposits — are significant for their enjoyment and interpretation. Therefore, caving parties should leave a cave as they find it. They should provide means for the removal of waste; limit marking to a few, small, and
                        removable signs as are needed for surveys; and, especially, exercise extreme care not to accidentally break or soil formations, disturb life forms or unnecessarily increase the number of disfiguring paths through an area.
                    </p>
                    <p>Leave nothing but footprints, take nothing but photos, kill nothing but time.</p>
                    <a href="https://en.wikipedia.org/wiki/Federal_Cave_Resources_Protection_Act_of_1988" target="_blank">
                        Federal Cave Resources Protection Act
                    </a>
                </div>
            </Row>
        </TabPane>
    );
};

export default AboutTab;
