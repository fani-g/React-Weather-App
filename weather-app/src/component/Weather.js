import axios from 'axios';
import {useState,useEffect} from 'react';
import Card from '../ui/Card';
import CardLayout from '../ui/CardLayout';
import WeatherCard from '../ui/WeatherCard';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const [currentDate,setCurrentDate] = useState(getDate());

    function getDate() {
      const today = new Date();
      const date = today.getDate();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();

     // const dateF = today.toDateString(); different format

      return `${date}/${month}/${year}`;
    }

    //const api_key = '97db02c5ed8dfb696b218cfa99786f7d';
    //const api_call ='https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';
    //const iconUrl = 'https://openweathermap.org/img/wn/${icon}@2x.png'
    
    const fetchData = async () => {
      try {
        //A GET request can be made with Axios to “get” data from a third party server like the openweathermap
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=97db02c5ed8dfb696b218cfa99786f7d`
        );
        setWeatherData(response.data);
        console.log(response.data); //You can see all the weather data in console log

      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const handleInputChange = (e) => {
      setCity(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetchData();
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={handleInputChange}
          />
          <button type="submit" className='btn btn-primary m-2'>Get Weather</button>
        </form>
          {weatherData ? (
            <WeatherCard>
                <h2>{weatherData.name}<i className="bi bi-geo-alt-fill text-danger"></i> </h2>
                <p>Date: {currentDate}</p>
                <h1>{weatherData.main.temp}°C </h1>
                <p>{weatherData.weather[0].description}</p>
                <CardLayout>
                  <Card>
                    <span><i className="bi bi-moisture fs-3"></i> Humidity</span> {weatherData.main.humidity}%
                  </Card>
                  {/*<p>Pressure : {weatherData.main.pressure}</p> */}
                  <Card>
                    <span><i className="bi bi-wind fs-3"></i> Wind Speed</span> {weatherData.wind.speed}m/s
                  </Card>
                  <Card>
                  <span><i className="bi bi-thermometer-half fs-3"></i>Feels like</span> {weatherData.main.feels_like}°C
                  </Card>
                </CardLayout>
            </WeatherCard>
            ) : (
              <p className='text-center'>Loading weather data...</p>
          )}
      </div>
    );
  };
  
  export default Weather;