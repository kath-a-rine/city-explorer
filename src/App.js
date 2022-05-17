import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import { Table, Figure, Alert } from 'react-bootstrap/'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: [],
      city: '',
      showMap: false
    }
  }

  handleCitySubmit = async (e) => {
    e.preventDefault();
    try {
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.city}&format=json`;
    console.log(this.state.city)
    let cityInfo = await axios.get(url);
    console.log(cityInfo.data)
    this.setState({
      lat: cityInfo.data[0].lat,
      lon: cityInfo.data[0].lon,
      showMap: true,
      error: false
    });
  } catch (error) {
    this.setState({
      error: true,
      errorMessage: error.message
    })
  }
  }

  cityChange = (e) => {
    this.setState({
      city: e.target.value
    });
  }

  render() {
    return (
      <>
      <body>
        <h1>City Explorer</h1>
        <p>Welcome to City Explorer. Enter the name of any U.S. city to find relevant location information!</p>
        <form onSubmit={this.handleCitySubmit}>
          <fieldset>
            <label htmlFor="cityName"><strong>City Name: </strong></label>
            <br></br>
            <input type="text" id="cityName" onChange={this.cityChange} />
            <button type="submit">Explore!</button>
          </fieldset>
        </form>
      
      {this.state.error
      ? 
      <Alert variant='danger'>
        <p>Uh Oh! {this.state.errorMessage}</p>
      </Alert>
    :
    (
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
            <td>{this.state.city}</td>
            <td>{this.state.lat}</td>
            <td>{this.state.lon}</td>
          </tr>
        </tbody>
      </Table>
    )
    }

{this.state.showMap && 
      <Figure>
        <Figure.Image
          width={600}
          height={600}
          src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${this.state.lat},${this.state.lon}&zoom=12`}
          alt="map"
        />
        <Figure.Caption>
         Map of {this.state.city}.
        </Figure.Caption>
      </Figure>
      }
      </body>
      </>
    )
  }
}
export default App;
