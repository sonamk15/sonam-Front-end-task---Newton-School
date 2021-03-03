
import React from 'react';
import {Card} from 'react-bootstrap';

const WeatherCard = ({dt, temp_min, temp_max, main, icon}) => {
  // create a date object with Date class constructor
  const date = new Date(dt);
  return (
    <Card style={{width: '10rem', backgroundColor: 'lightblue', marginBottom:'10px'}}>
      <Card.Img
        variant="top"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}

      />
      <Card.Body>
        <Card.Title style={{fontWeight:'bold'}}>{main}</Card.Title>
        <p>
          {date.toLocaleDateString()} 
        </p>
        <p>Min: {temp_min}°C</p>
        <p>Max: {temp_max}°C</p>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;