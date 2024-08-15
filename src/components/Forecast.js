import axios from "axios";
import React, { useEffect, useState } from "react";
import WeatherConditions from "./WeatherConditions";
import '../styles/Forecast.css'

function Forecast({ city }) {
  const [forecast, setForecast] = useState(null);
  const API_KEY = "d32addc397msh7731cfb0498f77ap145d34jsnf4dc4eb2aaa1";
  const API_HOST = "weatherapi-com.p.rapidapi.com";

  useEffect(() => {
    const getForecast = async function (city) {
      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
        params: { q: city, days: 3, lang: "ru" },
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
        },
      };

      try {
        const response = await axios.request(options);
        setForecast(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getForecast(city);
  }, [city]);
  return (
    <div>
      {forecast ? (
        <div className="forecast">
          <h2>Погода ближайшие дни:</h2>
          <div className="forecast-grid">
            {forecast.forecast.forecastday.map((day, index) => (
              <div key={index}>
                <h3>{new Date(day.date).toLocaleDateString('ru-RU', {weekday:'long'})}</h3>
                <p>Максимальная температура: {day.day.maxtemp_c} °C</p>
                <p>Минимальная температура: {day.day.mintemp_c} °C</p>
                <p>
                  <WeatherConditions conditionCode={day.day.condition.code} />
                </p>
                <p>{day.day.condition.text}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Forecast;
