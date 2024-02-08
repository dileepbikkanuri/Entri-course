// WeatherApp.js
import React, { useState } from 'react';
import axios from 'axios';
import './WeatherApp.css';

const WeatherApp = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const apiKey = '254b769c0d864b1997c89e3e950df651';
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';

  const getWeather = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.get(apiUrl, {
        params: {
          q: query,
          appid: apiKey,
          units: 'metric',
        },
      });
      setWeather(response.data);
    } catch (error) {
      setError('Error fetching weather data. Please try again.');
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getHourlyForecast = async () => {
    try {
      const response = await axios.get(forecastUrl, {
        params: {
          q: query,
          appid: apiKey,
          units: 'metric',
        },
      });
      // Extract and process the hourly forecast data from the response
      // Modify the code as per the structure of the API response
      const hourlyData = response.data.list;
      setHourlyForecast(hourlyData);
    } catch (error) {
      console.error('Error fetching hourly forecast:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather();
    getHourlyForecast();
  };

  return (
    <div className="weather-app">
      <h1 className="app-header">Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city or zip code"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}

      {weather.main && (
        <div className="weather-info">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}

      {hourlyForecast.length > 0 && (
        <div className="hourly-forecast">
          <h2>Hourly Forecast</h2>
          <ul>
            {hourlyForecast.map((hour, index) => (
              <li key={index}>
                {new Date(hour.dt * 1000).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}: {hour.main.temp} °C
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
