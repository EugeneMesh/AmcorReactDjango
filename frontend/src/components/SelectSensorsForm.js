import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Cookies from 'universal-cookie';
import axios from "axios";

import { API_URL_GET_SENSORS } from "../constants";

class SelectSensorsForm extends Component {
    cookies = new Cookies();
    checkedSensors = {};

    state = {
        sensors: []
    };

    componentDidMount() {
        this.getSensors();
    }

    getSensors = () => {
        axios.get(API_URL_GET_SENSORS).then(res => this.setState({ sensors: res.data }));
    };

    handleCheckboxChange = (e) => {
        this.checkedSensors[e.target.id] = e.target.checked;
    };

    handleFormSubmit = (e) => {
        for (let key in this.checkedSensors) {
            this.cookies.set(key, this.checkedSensors[key], { path: '/' });
        }

        let len = this.state.sensors.length;
        for (let i = 0; i < len; i++) {
            let serial_number = this.state.sensors[i].serial_number;
            this.checkedSensors[serial_number] = this.cookies.get(serial_number)
                                                            && (this.cookies.get(serial_number) === 'true');
        }

        this.props.handleClose(this.checkedSensors);
    };


    render() {
        return(
            <Form onSubmit={this.handleFormSubmit}>
                {!this.state.sensors || this.state.sensors.length <= 0 ? (
                            <div>
                                <b>Упс, ни одного сенсора нет...</b>
                            </div>
                          ) : (
                            this.state.sensors.map(sensor => (
                                <div key={sensor.serial_number} className="mb-3">
                                        <input type="checkbox" className="form-check-input"
                                            id={sensor.serial_number}
                                            value={sensor.serial_number}
                                            defaultChecked={this.cookies.get(sensor.serial_number) && (this.cookies.get(sensor.serial_number) === 'true')}
                                            onChange={this.handleCheckboxChange}
                                        />
                                        &nbsp;
                                        <label className="form-check-label" for={sensor.serial_number}>
                                            {sensor.serial_number}
                                        </label>
                                  </div>
                            ))
                          )}
                        <Button variant="primary" type="button" onClick={this.handleFormSubmit}>Сохранить</Button>
            </Form>
        );
    }
}

export default SelectSensorsForm;