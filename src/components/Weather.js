import axios from "axios";
import React, { useState } from "react";
import "./Weather.css";
import WeatherConditions from "./WeatherConditions";
import Forecast from "./Forecast";

function Weather({getForecast}) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);


  const API_KEY = "d32addc397msh7731cfb0498f77ap145d34jsnf4dc4eb2aaa1";
  const API_HOST = "weatherapi-com.p.rapidapi.com";

  const getWeather = async function (city) {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: city, lang: "ru" },
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": API_HOST,
      },
    };

    try {
      const response = await axios.request(options);
      setWeather(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (city) {
      getWeather(city);
      setCity("")
    }
  };

  return (
    <div className="weather">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Введите город"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        ></input>
        
        <button type="submit">Узнать</button>
        
        {weather? (
          <div className="API">
            <h2>{weather.location.name}</h2>
            <p>{new Date(weather.location.localtime).toLocaleDateString('ru-RU', {weekday:'long'})}</p>
            <p>{weather.current.temp_c} °C</p>
            <div className="info_weather">
              <p>
                <WeatherConditions
                  conditionCode={weather.current.condition.code}
                />
              </p>
              <p>{weather.current.condition.text}</p>
            </div>
          </div>
        ) : (
          <div className="noAPI"> Нет данных о погоде</div>
        )}
        <Forecast city={weather?.location?.name} />
      </form>
    </div>
  );
}
export default Weather