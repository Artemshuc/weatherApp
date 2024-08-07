import axios from "axios";
import React, { useState } from "react";

function Weather() {

    const [city, setCity] = useState ('')
    const [weather, setWeather] = useState (null)

    const API_KEY = 'd32addc397msh7731cfb0498f77ap145d34jsnf4dc4eb2aaa1'
    const API_HOST = 'weatherapi-com.p.rapidapi.com'
    
    const getWeather = async function (city) {
        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/current.json',
            params: {q: city},
            headers: {
              'x-rapidapi-key': API_KEY,
              'x-rapidapi-host': API_HOST,
            }
          };

          try {
            const response = await axios.request(options)
            setWeather(response.data)
          } catch (error) {
            console.error(error);
            
          }
          
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        getWeather(city)
        setCity('')
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input placeholder="Enter your city" value={city} onChange={(event) => setCity(event.target.value)}></input>
            <button type="submit">submit</button>
            {weather && (
                <div>
           <h2>{weather.location.name}</h2>
           <p>{weather.current.temp_c} °C</p>
           <p>{weather.current.condition.text}</p>
         </div>
            )}
        </form>
    </div>
  )
}
export default Weather;
