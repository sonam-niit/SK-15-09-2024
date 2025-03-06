import axios from "axios";
import { useState } from "react";

function WeatherApp() {
    const [city,setCity]=useState('');
    const [weather,setWeather]=useState(null);
    const APIKey='add_your_api_key_from_openweatherapi.com';
    const handleClick=async()=>{
        if(!city){
            alert('First enter City name');return
        }
        try {
            const resp= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`);
            if(resp.status==200){
                setWeather(resp.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return ( 
        <div>
            <h3>Weather App</h3>
            <input type="text" placeholder="Enter City Name" value={city}
            onChange={(e)=>setCity(e.target.value)} />
            <button onClick={handleClick}>Show Weather</button>
            {
                weather && <div>
                    <h3>{weather.name}, {weather.sys.country}</h3>
                    <p>Tempreture: {weather.main.temp}</p>
                    <p>Weather: {weather.weather[0].description}</p>
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                </div>
            }
        </div>
     );
}

export default WeatherApp;