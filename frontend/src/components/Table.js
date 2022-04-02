import React, { Component, Fragment} from "react";

class Table extends Component {

    tableRows = {};
    tableHeader = ['&nbsp'];

    prepareTableRows() {
        if (this.props.records && this.props.records.length > 0) {
            this.tableRows = {};
            this.tableHeader = ['&bsp;'];
            this.props.records.forEach(record => {
                let date = new Date(record['Date and Time']);
                let currentRecordDateTime = date.toLocaleString();
                if (!this.tableRows[currentRecordDateTime]) {
                    this.tableRows[currentRecordDateTime] = [];
                }
                this.tableRows[currentRecordDateTime].push(record['Temperature']);
                this.tableRows[currentRecordDateTime].push(record['Relative Humidity']);
            });
        }
    }

    render() {
        this.prepareTableRows();
        return(
            <Fragment>
              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                        <th scope="col">#</th>
                    {this.props.sensors.map((sensor, index) => (
                        <Fragment>
                            <th scope="col">{sensor}, °C</th>
                            <th scope="col">{sensor}, %</th>
                        </Fragment>
                    ))}
                    </tr>
                  </thead>
                    <tbody>
                      { Object.keys(this.tableRows).map((key, index) => (
                        <tr>
                        <td>{key}</td>
                        {this.tableRows[key].map((item) => (
                            <td>{item}</td>
                        ))}
                        </tr>
                      ))}
                    </tbody>
                </table>
              </div>
            </Fragment>
        );
    }
}

export default Table;