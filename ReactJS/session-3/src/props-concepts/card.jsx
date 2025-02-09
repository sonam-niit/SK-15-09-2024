function Card({weather}) {
    const getBackgroundColor=(condition)=>{
        switch(condition){
            case "Sunny":
                return "orange"
            case "Cloudy":
                return 'lightblue'
            case "Windy":
                return 'grey'
            default:
                return 'white'
        }
    }
    return ( 
        <div
            style={{
                border:'1px solid #ddd',
                padding: '1rem',
                width:'200px',
                backgroundColor: getBackgroundColor(weather.condition)
            }}>
            <h2>{weather.city}</h2>
            <p>{weather.icon} {weather.condition}</p>
            <p>Tempreture: {weather.tempreture}°C</p>
        </div>
     );
}

export default Card;