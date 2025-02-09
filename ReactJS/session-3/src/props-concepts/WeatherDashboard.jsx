import weatherData from '../assets/weatherdata.json';
import Card from './card';
function WeatherDashboard() {
    return (
        <>
            <h1>Weather Dashboard</h1>
            <div style={{display:'flex'}}>
                {
                    weatherData.map(weather => (
                        <Card key={weather.id} weather={weather} />
                    ))
                }
            </div>
        </>
    );
}

export default WeatherDashboard;