import React from 'react';
import { Table } from 'react-bootstrap'

class CityTable extends React.Component {

    render() {
        return (
            <Table striped bordered hover size="md">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.city}</td>
                        <td>{this.props.lat}</td>
                        <td>{this.props.lon}</td>
                    </tr>
                </tbody>
            </Table>

        );
    }
}


export default CityTable;