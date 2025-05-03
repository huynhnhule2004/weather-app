import axios from 'axios';

const API_KEY = '8eebae7f126ed12a8de8dff19df68361';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherByCity = async (city, units = 'metric') => {
  const res = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      units,
      lang: 'vi',
      appid: API_KEY,
    },
  });
  return res.data;
};

export const fetchWeatherByCoords = async (lat, lon, units = 'metric') => {
  const res = await axios.get(`${BASE_URL}/weather`, {
    params: {
      lat,
      lon,
      units,
      lang: 'vi',
      appid: API_KEY,
    },
  });
  return res.data;
};

export const fetchForecast = async (city, units = 'metric') => {
  const res = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: city,
      units,
      lang: 'vi',
      appid: API_KEY,
    },
  });
  return res.data;
};
