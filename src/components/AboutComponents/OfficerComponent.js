import React, { Component } from "react";
import { Button, Card, CardBody, Modal, ModalBody, Row, TabPane } from "reactstrap";
import { baseUrl } from "../../shared/baseUrl";

class Officers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            modalIndex: null,
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(officer) {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
            modalIndex: officer.id,
        });
    }
    render() {
        // fitlering the officers array to match the officer.id set by the card that is clicked on
        const RenderModal = ({ officers }) => {
            return (
                <>
                    {officers
                        .filter((officer) => {
                            return officer.id === this.state.modalIndex;
                        })
                        .map((officer) => {
                            return (
                                <Modal fade isOpen={this.state.isModalOpen} toggle={this.toggleModal} className="modal-lg" key={officer.id}>
                                    <ModalBody>
                                        <Card>
                                            <CardBody>
                                                <Row className="d-flex justify-content-center">
                                                    <img className="img-card-top mb-2" src={baseUrl + officer.image} alt={officer.name} width="75%" height="auto" />
                                                </Row>
                                                <h2 className="card-title text-center mb-2">
                                                    <strong>{officer.name}</strong>
                                                </h2>
                                                <h3 className="card-title text-center">{officer.title}</h3>
                                                <p className="text-center">{officer.desc}</p>
                                            </CardBody>
                                        </Card>
                                        <div className="d-flex justify-content-center">
                                            <Button type="button" onClick={this.toggleModal} className="btn btn-secondary mt-3">
                                                Close
                                            </Button>
                                        </div>
                                    </ModalBody>
                                </Modal>
                            );
                        })}
                </>
            );
        };
        const RenderCard = ({ officers }) => {
            return (
                <Row className="row-content">
                    {officers.map((officer) => {
                        return (
                            <React.Fragment key={officer.id}>
                                <div className="col-sm-6 col-md-3">
                                    <Card className="mb-4 card-highlight">
                                        <CardBody>
                                            <img className="img-card-top" src={baseUrl + officer.image} alt="officer" width="100%" height="auto" />
                                            <br />
                                            <h2 className="card-title text-center">
                                                <strong>{officer.name}</strong>
                                            </h2>
                                            <h3 className="card-title text-center">{officer.title}</h3>
                                            <div className="d-flex justify-content-center">
                                                <Button type="button" onClick={() => this.toggleModal(officer)} className="btn btn-sm btn-warning">
                                                    See More
                                                </Button>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                            </React.Fragment>
                        );
                    })}
                    <RenderModal officers={this.props.officers} isModalOpen={this.state.isModalOpen} />
                </Row>
            );
        };
        return (
            <TabPane fade="true" tabId="meet">
                <RenderCard officers={this.props.officers} />
            </TabPane>
        );
    }
}

export default Officers;
