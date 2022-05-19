import React from 'react';
import { Table } from 'react-bootstrap';

class Weather extends React.Component {

    render() {
        return (
            <Table striped bordered hover size="md">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Weather Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.weather.data[0].date}</td>
                        <td>{this.props.weather.data[0].description}</td>
                    </tr>
                </tbody>
            </Table>

        );
    }
}


export default Weather;