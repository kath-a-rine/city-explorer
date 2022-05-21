import React from 'react';

class WeatherDay extends React.Component {

    render() {
        return (
        
          <tr>
            <td>{this.props.weatherData.date}</td>
            <td>
              {this.props.weatherData.high_temp} Degrees
              <br />
              {this.props.weatherData.description}
            </td>
          </tr>
        );
    }
}

export default WeatherDay;
