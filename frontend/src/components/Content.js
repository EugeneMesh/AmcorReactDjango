import React, { Component, Fragment } from "react";
import Chart from "./Chart";
import Table from "./Table";
import ExportCSV from "./ExportCSV";
import SelectSensorsModal from "./SelectSensorsModal";
import axios from "axios";
import Cookies from 'universal-cookie';

import { API_URL_GET_RECORDS } from "../constants";

class Content extends Component {
    checkedSensors = {};
    cookies = new Cookies();
    filtered = [];

    constructor(props) {
        super(props);
        this.state = { records: [] };
    }

    componentDidMount() {
        this.getInitialRecords();
    }

    getInitialRecords = () => {
        var myCookies = this.cookies.getAll();
        var keys = Object.keys(myCookies);
        this.filtered = [];
        this.filtered = keys.filter(function(key) {
            var cookieValue = myCookies[key];
            return cookieValue && (cookieValue === 'true');
        });

        if (this.filtered.length > 0) {
            var url = API_URL_GET_RECORDS + '?serial_numbers=' + this.filtered.join();
            axios.get(url).then(res => this.setState({ records: res.data }));
        }
    };

    getRecords = () => {
        var checkedSensors = this.checkedSensors;
        var keys = Object.keys(checkedSensors);
        this.filtered = [];
        this.filtered = keys.filter(function(key) {
            return checkedSensors[key];
        });

        if (this.filtered.length > 0) {
            var url = API_URL_GET_RECORDS + '?serial_numbers=' + this.filtered.join();
            axios.get(url).then(res => this.setState({ records: res.data }));
        }
    };

    handleModalClose = (checkedSensorsInModal) => {
        if (checkedSensorsInModal) {
            this.checkedSensors = checkedSensorsInModal;
            this.getRecords();
        }
    }

    render() {
        var currentDateTime = new Date();
        var fileName = "amcor " + currentDateTime.toLocaleString();
        return (
            <Fragment>
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                  <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Температура, °C</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                      <div className="btn-group me-2">
                        <SelectSensorsModal handleModalClose={this.handleModalClose} />
                      </div>
                      <div className="btn-group me-2">
                        <ExportCSV csvData={this.state.records} sensors={this.filtered} fileName={fileName} />
                      </div>
                    </div>
                  </div>

                  <Chart records={this.state.records} measure="Temperature" />
                  <h1 className="h2">Влажность, %</h1>
                  <Chart records={this.state.records} measure="Relative Humidity" />

                  <h2>Данные</h2>
                  <Table records={this.state.records} sensors={this.filtered} />
                </main>
            </Fragment>
        );
    }
}

export default Content;