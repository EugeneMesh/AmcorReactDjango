import React from 'react'
import Button from 'react-bootstrap/Button';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

export default function ExportCSV({csvData, sensors, fileName}){

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    function findObjectByKey(array, key, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] === value) {
                return i;
            }
        }
        return -1;
    }

    const exportToCSV = (csvData, sensors, fileName) => {
        var tableRows = [];
        sensors.forEach((sensor) => {
        });
        if (csvData && csvData.length > 0) {
            csvData.forEach(record => {
                let date = new Date(record['Date and Time']);
                let newDateTimeString = date.toLocaleString();
                let indexOfExistingEntry = findObjectByKey(tableRows, 'Дата и время', newDateTimeString);
                if (indexOfExistingEntry < 0) {
                    let newDataEntry = {};
                    newDataEntry['Дата и время'] = newDateTimeString;
                    newDataEntry[record['serial_number'] + ', °C'] = record['Temperature'];
                    newDataEntry[record['serial_number'] + ', %'] = record['Relative Humidity'];
                    tableRows.push(newDataEntry);
                } else {
                    tableRows[indexOfExistingEntry][record['serial_number'] + ', °C'] = record['Temperature'];
                    tableRows[indexOfExistingEntry][record['serial_number'] + ', %'] = record['Relative Humidity'];
                }
            });
        }
        const ws = XLSX.utils.json_to_sheet(tableRows);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, fileName + fileExtension);
    }

    return (
        <button type="button" className="btn btn-sm btn-outline-secondary"
                onClick={(e) => exportToCSV(csvData, sensors, fileName)}>Выгрузить в Excel</button>
    )
}