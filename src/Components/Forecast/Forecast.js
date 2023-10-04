import React from 'react';
import {
  Accordion,
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import "./forecast.css";

const week_days = ["Sunday", 'Monday', "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Forecast = ({ data }) => {
  const todayIndex = new Date().getDay();
  console.log(todayIndex);
  const forecastDays = week_days.slice(todayIndex, week_days.length).concat(week_days.slice(0, todayIndex));
  console.log(forecastDays);

  return (
    <Accordion allowToggle>
      {data.list.splice(0, 7).map((item, idx) => {
        return (
          <AccordionItem key={idx}>
            <h2>
              <AccordionButton borderRadius="15px">
                <Box as="span" flex='1' textAlign='left'>
                  <div className='daily-item'>
                    <img alt='weather' className='icon-small' src={`assets/${item.weather[0].icon}.png`} />
                    <label className='day'>{forecastDays[idx]}</label>
                    <label className='description'>{item.weather[0].description}</label>
                    <label className='min-max'>{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                  </div>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <div className='daily-details-grid'>
                <div className='daily-details-grid-item'>
                  <label>Pressure</label>
                  <label>{item.main.pressure} Pa</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label>Humidity</label>
                  <label>{item.main.humidity} %</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label>Clouds</label>
                  <label>{item.clouds.all} %</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label>Winds Speed</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label>Sea Level</label>
                  <label>{item.main.sea_level} m</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label>Feels Like</label>
                  <label>{item.main.feels_like}°C  </label>
                </div>
              </div>
            </AccordionPanel>
          </AccordionItem>
        );

      })}

    </Accordion >
  );
};

export default Forecast;
