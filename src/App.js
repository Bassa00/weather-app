import React, { Component } from 'react';
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = 'daa0eb66357a8dad748239018d032f0d'

class App extends Component {

  state = {
    temprature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

    const data = await api_call.json();

    if (city && country) {
      this.setState({
        temprature: data.main.temp + ' °C',
        city: data.name,
        country: data.sys.country ,
        humidity: data.main.humidity+'%',
        description: data.weather[0].description,
        error: ''
      })
    } else {
      this.setState({
        temprature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please enter the value!'
      })
    }
  }

  render() {
    return (
      <div>
        <div className='wrapper'>
          <div className='main'>
            <div className='container'>
              <div className='row'>
                <div className='col-xs-5 title-container'>
                  <Title />
                  <div className="col-xs-7 form-container">
                    <Form getWeather={this.getWeather} />
                    <Weather 
                      temprature={this.state.temprature}
                      city={this.state.city}
                      country={this.state.country}
                      humidity={this.state.humidity} description={this.state.description} error={this.state.error}
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
