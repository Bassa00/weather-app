import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = 'daa0eb66357a8dad748239018d032f0d'

class App extends Component {
  getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}&units=metric`);

    const data = await api_call.json();

    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather/>
      </div>
    );
  }
}

export default App;
