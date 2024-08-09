import axios from "axios";
import React, { useEffect, useState } from "react";

function WeatherConditions({ conditionCode }) {
  const [weatherIcons, setWeatherIcons] = useState({});

  useEffect(() => {
    const fetchWeatherConditions = async () => {
      try {
        const response = await axios.get("https://www.weatherapi.com/docs/weather_conditions.json");
        const conditions = response.data;

        const newWeatherIcons = {};
        conditions.forEach((condition) => {
          let iconName = "";
          switch (condition.code) {
            case 1000:
              iconName = "sunny";
              break;
            case 1003:
              iconName = "partly_cloudy_day";
              break;
            case 1006:
              iconName = "cloud";
              break;
            case 1009:
              iconName = "foggy";
              break;
            default:
              iconName = "question_mark"; 
          }

          newWeatherIcons[condition.code] = (
            <span className="material-symbols-outlined" key={condition.code}>
              {iconName}
            </span>
          );
        });

        setWeatherIcons(newWeatherIcons);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeatherConditions();
  }, []);

  return <div>{weatherIcons[conditionCode]}</div>;
}

export default WeatherConditions;
