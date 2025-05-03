import { useEffect, useState } from 'react';
import { fetchWeatherByCity, fetchForecast, fetchWeatherByCoords } from '../../services/weather';
import useGeoLocation from '../../hooks/useGeoLocation';
import SearchBar from '../../components/SearchBar';
import WeatherCard from '../../components/WeatherCard';
import ToggleUnit from '../../components/ToggleUnit';
import ThemeToggle from '../../components/ThemeToggle';
import ChartDisplay from '../../components/ChartDisplay';

const Home = () => {
  const [city, setCity] = useState('Hanoi');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [units, setUnits] = useState('metric');
  const location = useGeoLocation();

  useEffect(() => {
    const fetchData = async () => {
      if (location) {
        const data = await fetchWeatherByCoords(location.lat, location.lon, units);
        setCity(data.name);
        setWeather(data);
        const forecastData = await fetchForecast(data.name, units);
        const daily = forecastData.list.filter((item, index) => index % 8 === 0);
        setForecast(daily.map(d => ({ date: d.dt_txt, temp: d.main.temp })));
      }
    };
    fetchData();
  }, [location, units]);

  const handleSearch = async (name) => {
    const data = await fetchWeatherByCity(name, units);
    setCity(name);
    setWeather(data);
    const forecastData = await fetchForecast(name, units);
    const daily = forecastData.list.filter((item, index) => index % 8 === 0);
    setForecast(daily.map(d => ({ date: d.dt_txt, temp: d.main.temp })));
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="flex justify-between items-center">
        <SearchBar onSearch={handleSearch} />
        <ToggleUnit units={units} setUnits={setUnits} />
        <ThemeToggle />
      </div>
      {weather && <WeatherCard data={weather} />}
      <ChartDisplay forecast={forecast} />
    </div>
  );
};

export default Home;