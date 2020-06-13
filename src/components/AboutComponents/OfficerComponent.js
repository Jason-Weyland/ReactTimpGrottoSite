import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader, Modal, ModalBody, Row, TabPane } from "reactstrap";

class Officers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            modalIndex: "1",
        };
        this.toggleModal = this.toggleModal.bind(this);
        // this.setModalIndex = this.setModalIndex.bind(this);
    }

    // setModalIndex(officer) {
    //     this.setState({
    //         modalIndex: officer.id,
    //     });
    // }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    }
    render() {
        const RenderModal = ({ officers }) => {
            return (
                <>
                    {officers
                        .filter((officer) => {
                            return officer.id === this.state.modalIndex;
                        })
                        .map((officer) => {
                            return (
                                <Modal fade isOpen={this.state.isModalOpen} toggle={this.toggleModal} className="modal-lg" key={officer.title}>
                                    <ModalBody>
                                        <Card>
                                            <CardBody>
                                                <Row className="d-flex justify-content-center">
                                                    <img className="img-card-top mb-2" src={officer.image} width="75%" height="auto" />
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
                                            <img className="img-card-top" src={officer.image} alt="officer" width="100%" height="auto" />
                                            <br />
                                            <h2 className="card-title text-center">
                                                <strong>{officer.name}</strong>
                                            </h2>
                                            <h3 className="card-title text-center">{officer.title}</h3>
                                            <div className="d-flex justify-content-center">
                                                <Button type="button" onClick={this.toggleModal} onClick={this.setModalIndex} className="btn btn-sm btn-warning">
                                                    See More
                                                </Button>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                            </React.Fragment>
                        );
                    })}
                    <RenderModal officers={this.props.officers} />
                </Row>
            );
        };
        console.log('rendermodal:' + RenderModal)
        return (
            <TabPane tabId="2">
                <RenderCard officers={this.props.officers} />
            </TabPane>
        );
    }
}

export default Officers;
