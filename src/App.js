import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import { Alert } from 'react-bootstrap/'
import Form from './components/CityForm.js'
import Figure from './components/CityFigure.js'
import Table from './components/CityTable.js'
import Weather from './components/Weather.js'
import Movies from './components/Movies.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: [],
      city: '',
      showMap: false,
      weatherData: []
    }
  }

  handleCitySubmit = async (e) => {
    e.preventDefault();
    try {
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.city}&format=json`;
    console.log(this.state.city)
    
    let cityInfo = await axios.get(url);
    console.log(cityInfo.data)
    
    let weatherUrl = `${process.env.REACT_APP_SERVER}/weather?city=${this.state.city}`;
    
    let weather = await axios.get(weatherUrl);
    console.log(weather);

    let movieUrl = `${process.env.REACT_APP_SERVER}/movies?city=${this.state.city}`;
    let movie = await axios.get(movieUrl);
    
    this.setState({
      movieData: movie
    })
    

    this.setState({
      lat: cityInfo.data[0].lat,
      lon: cityInfo.data[0].lon,
      weatherData: weather,
      showMap: true,
      error: false,
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
        <h1>City Explorer</h1>
        <p>Welcome to City Explorer. Enter the name of any U.S. city to find relevant location information!</p>
      
      <Form 
        handleCitySubmit={this.handleCitySubmit}
        cityChange={this.cityChange}
      />

      {this.state.error
      ? 
      <Alert variant='danger'>
        <p>Uh Oh! {this.state.errorMessage}</p>
      </Alert>
    :
    (
      <>
      <Table 
        city={this.state.city}
        lat={this.state.lat}
        lon={this.state.lon}
      />
      </>
    )
    }

{this.state.showMap && 
  <>
    <Weather 
     weather={this.state.weatherData}
   />
   <Figure 
      city={this.state.city}
      lat={this.state.lat}
      lon={this.state.lon}
   />
  <Movies 
    movieData={this.state.movieData}/>
   </>
      }
      </>
    )
  }
}
export default App;
