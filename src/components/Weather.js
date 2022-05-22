import React from 'react';
import { Table } from 'react-bootstrap';
import WeatherDay from './WeatherDay'

class Weather extends React.Component {
    render() {
        console.log(this.props.weather);
        let weather = this.props.weatherData.map((day, idx) => 
            <WeatherDay
                weatherData = {day}
                key = {idx}
            />
            );
        return (
            <Table striped bordered hover size="md">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Weather</th>
                    </tr>
                </thead>
                <tbody>
                    {weather}
                </tbody>
            </Table>

        );
    }
}

export default Weather;