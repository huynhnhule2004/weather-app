const WeatherCard = ({ data }) => {
  const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  return (
    <div className="mt-6 p-4 rounded shadow bg-blue-100 dark:bg-blue-800">
      <h2 className="text-xl font-bold">{data.name}, {data.sys.country}</h2>
      <div className="flex items-center gap-4 mt-2">
        <img src={icon} alt="weather icon" />
        <div>
          <p className="text-3xl font-bold">{Math.round(data.main.temp)}°</p>
          <p>{data.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;