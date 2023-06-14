import React, { useState } from 'react';
import axios from 'axios';
import './weather.css';

const Weather = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const weatherKey = "ecbbb1889f875ac83521e2af5f032c5c";
  const [error, setError] = useState('');

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherKey}`);
      setWeatherData(response.data);
      console.log(response.data)
      setError('');
    } catch (error) {
      console.log(error);
      setError('Please enter the city name correctly');
    }
  };

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className="weather-container">
      <section className="weather-section">
      {error && <div className="error-alert">{error}</div>}
        <form onSubmit={handleSubmit} >
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={handleInputChange}
            className="location-input"
          />
          <button type="submit" className="get-weather-button">Get Weather</button>
        </form>

        
        {weatherData && (
          <div className="weather-card">
            <div className="location">
              <h6>{weatherData.name}</h6>
              <h6>{new Date(weatherData.dt * 1000).toLocaleTimeString()}</h6>
            </div>

            <div className="weather-info">
              <h6 className="temperature">{(weatherData.main.temp - 273.15).toFixed(2)}°C</h6>
              <span className="description">{weatherData.weather[0].description}</span>
            </div>

            <div className="extra-info">
              <div className="extra-item">
                <i className="fas fa-wind"></i>
                <span>{weatherData.wind.speed} km/h</span>
              </div>
              <div className="extra-item">
                <i className="fas fa-tint"></i>
                <span>{weatherData.main.humidity}%</span>
              </div>
              <div className="extra-item">
                <i className="fas fa-sun"></i>
                <span>0.2h</span>
              </div>
            </div>

            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt="Weather Icon"
              className="weather-icon"
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default Weather;
