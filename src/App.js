import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: [],
      city: ''
    }
  }

  handleCitySubmit = async (e) => {
    e.preventDefault();
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.city}&format=json`;
    console.log(this.state.city)
    let cityInfo = await axios.get(url);
    console.log(cityInfo.data)
    this.setState({
      lat: cityInfo.data[0].lat,
      lon: cityInfo.data[0].lon
    });
  }

  cityChange = (e) => {
    this.setState({
      city: e.target.value
    });
  }


  render() {
    return (
      <>
        <h1>City Explorer</h1>
        <p>Welcome to City Explorer. Enter the name of any U.S. city to find relevant location information!</p>
        <form onSubmit={this.handleCitySubmit}>
          <label htmlFor="cityName">City Name: </label>
          <input type="text" id="cityName" onChange={this.cityChange} />
          <button type="submit">Explore!</button>
        </form>

        <Table striped bordered hover variant="dark" size="md">
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
      </>
    )
  }
}
export default App;
