import React from 'react';
import { Figure } from 'react-bootstrap';

class CityFigure extends React.Component {
  render() {
    return (
      <Figure>
        <Figure.Image
          width={600}
          height={600}
          src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${this.props.lat},${this.props.lon}&zoom=12`}
          alt="map"
        />
        <Figure.Caption>
          Map of {this.props.city}.
        </Figure.Caption>
      </Figure>

    );
  }
}

export default CityFigure;