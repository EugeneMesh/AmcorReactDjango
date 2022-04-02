import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import axios from "axios";

import { API_URL_GET_RECORDS } from "../constants";

class Chart extends Component {
        datasetColors = ['rgba(75,192,192,1)', '#742774', '#747427']

        render() {
            var labels = [];
            var numberOfRecords = this.props.records.length;
            var datasets = [];
            var recordTemperatureData = [];
            var recordLabels = [];
            var chartData = {
                labels: [],
                datasets: []
            };
            var i = 0;
            if (numberOfRecords) {
                var currentSensor = this.props.records[0].serial_number;
                this.props.records.forEach((record) => {
                    if (currentSensor != record['serial_number'])
                    {
                        let datasetEntry = {
                            label: currentSensor,
                            data: recordTemperatureData,
                            fill: false,
                            borderColor: this.datasetColors[i]
                        }
                        i++;
                        chartData.datasets.push(datasetEntry);
                        currentSensor = record['serial_number'];
                        recordTemperatureData = [];
                    }
                    let date = new Date(record['Date and Time']);
                    let dataEntry = { x: date.toLocaleString(), y:record[this.props.measure] };
                    recordTemperatureData.push(dataEntry);
                    recordLabels.push(date.toLocaleString());
                })
            }
            if (recordTemperatureData.length > 0) {
                let datasetEntry = {
                    label: currentSensor,
                    data: recordTemperatureData,
                    fill: false,
                    borderColor: this.datasetColors[i]
                }

                let filtered = recordLabels.filter(function(value, index, self) {
                    return self.indexOf(value) === index;
                });
                chartData.datasets.push(datasetEntry);
                chartData.labels = filtered.sort();
            }

            return(
              <div className="my-4 w-100 chartjs-render-monitor" width="1161" height="488"><Line data={chartData} /></div>
            );
        }
}

export default Chart;