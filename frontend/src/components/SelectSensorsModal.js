import React, { Component, Fragment } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SelectSensorsForm from "./SelectSensorsForm"

class SelectSensorsModal extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };

    handleClose = (checkedSensors) => {
        this.setState({ modal: false });
        this.props.handleModalClose(checkedSensors);
    }


    render() {
        var title = "Выберите сенсоры";
        var button = <Button variant="primary" onClick={this.toggle}>Выбрать сенсоры</Button>;
        return(
                  <Fragment>
                    {button}
                    <Modal show={this.state.modal} onHide={this.handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                      </Modal.Header>

                      <Modal.Body>
                        <SelectSensorsForm handleClose={this.handleClose} />
                      </Modal.Body>

                    </Modal>
                  </Fragment>
              );
    }
}

export default SelectSensorsModal;