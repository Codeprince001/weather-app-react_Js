import "./currentweather.css";

const Currentweather = ({ data }) => {
  return (
    <section className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img alt="weather" className="weather-icon" src={`assets/${data.weather[0].icon}.png`} />
      </div>
      <div className="bottom">
        <p className="temperature">
          {Math.round(`${data.main.temp}`)}°C
        </p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label heading">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">{Math.round(`${data.main.feels_like}`)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{Math.round(`${data.wind.speed}`)}°Cm/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{Math.round(`${data.main.humidity}`)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{Math.round(`${data.main.pressure}`)}°C MPa</span>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Currentweather;
