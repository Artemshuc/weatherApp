import axios from "axios";
import React, { useEffect, useState } from "react";

function WeatherConditions({ conditionCode }) {
  const [weatherIcons, setWeatherIcons] = useState({});

  useEffect(() => {
    const fetchWeatherConditions = async () => {
      try {
        const response = await axios.get(
          "https://www.weatherapi.com/docs/weather_conditions.json"
        );
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
            case 1030:
              iconName = "mist";
              break;
            case 1063:
              iconName = "rainy";
              break;
            case 1066:
              iconName = "weather_mix";
              break;
            case 1069:
              iconName = "weather_mix";
              break;
            case 1072:
              iconName = "rainy_light";
              break;
            case 1087:
              iconName = "thunderstorm";
            case 1114:
              iconName = "weather_mix";
              break;
            case 1117:
              iconName = "rainy_heavy";
              break;
            case 1135:
              iconName = "foggy";
              break;
            case 1147:
              iconName = "weather_hail";
              break;
            case 1150:
              iconName = "rainy";
              break;
            case 1153:
              iconName = "rainy";
              break;
            case 1168:
              iconName = "rainy";
              break;
            case 1171:
              iconName = "rainy";
              break;
            case 1180:
              iconName = "rainy";
              break;
            case 1183:
              iconName = "rainy";
              break;
            case 1186:
              iconName = "rainy";
              break;
            case 1189:
              iconName = "rainy";
              break;
            case 1192:
              iconName = "rainy";
              break;
            case 1195:
              iconName = "rainy";
              break;
            case 1198:
              iconName = "rainy";
              break;
            case 1201:
              iconName = "rainy";
              break;
            case 1204:
              iconName = "snowing";
              break;
            case 1207:
              iconName = "snowing";
              break;
            case 1210:
              iconName = "snowing";
              break;
            case 1213:
              iconName = "snowing";
              break;
            case 1216:
              iconName = "snowing";
              break;
            case 1219:
              iconName = "snowing";
              break;
            case 1222:
              iconName = "snowing";
              break;
            case 1225:
              iconName = "snowing";
              break;
            case 1237:
              iconName = "snowing_heavy";
              break;
            case 1243:
              iconName = "rainy_heavy";
              break;
            case 1246:
              iconName = "rainy_heavy";
              break;
            case 1249:
              iconName = "rainy_heavy";
              break;
            case 1252:
              iconName = "rainy_heavy";
              break;
            case 1255:
              iconName = "rainy_heavy";
              break;
            case 1258:
              iconName = "rainy_heavy";
              break;
            case 1261:
              iconName = "rainy_heavy";
              break;
            case 1264:
              iconName = "rainy_heavy";
              break;
            case 1273:
              iconName = "weather_hail";
              break;
            case 1276:
              iconName = "weather_hail";
              break;
            case 1279:
              iconName = "weather_hail";
              break;
            case 1282:
              iconName = "weather_hail";
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
