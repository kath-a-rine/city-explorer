import React from 'react';
import { Table } from 'react-bootstrap';

class Weather extends React.Component {

    render() {
        return (
            <Table striped bordered hover size="md">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Weather</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.weather.data[0].date}</td>
                        <td>
                            {this.props.weather.data[0].high_temp} Degrees 
                            <br/>
                            {this.props.weather.data[0].description}
                        </td>
                    </tr>
                    <tr>
                        <td>{this.props.weather.data[1].date}</td>
                        <td>
                            {this.props.weather.data[1].high_temp} Degrees 
                            <br/>
                            {this.props.weather.data[1].description}
                        </td>
                    </tr>
                    <tr>
                        <td>{this.props.weather.data[2].date}</td>
                        <td>
                            {this.props.weather.data[2].high_temp} Degrees 
                            <br/>
                            {this.props.weather.data[2].description}
                        </td>
                    </tr>
                    <tr>
                        <td>{this.props.weather.data[3].date}</td>
                        <td>
                            {this.props.weather.data[3].high_temp} Degrees 
                            <br/>
                            {this.props.weather.data[3].description}
                        </td>
                    </tr>
                    <tr>
                        <td>{this.props.weather.data[4].date}</td>
                        <td>
                            {this.props.weather.data[4].high_temp} Degrees 
                            <br/>
                            {this.props.weather.data[4].description}
                        </td>
                    </tr>
                    <tr>
                        <td>{this.props.weather.data[5].date}</td>
                        <td>
                            {this.props.weather.data[5].high_temp} Degrees 
                            <br/>
                            {this.props.weather.data[5].description}
                        </td>
                    </tr>
                </tbody>
            </Table>

        );
    }
}

export default Weather;