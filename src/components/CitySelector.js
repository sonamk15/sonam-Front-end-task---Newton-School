import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';

const CitySelector = () => {
    const [city, setCity] = useState('');
    const [results, setResults] = useState(null);
  
    const onSearch = () => {
      fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=6f7d192ff98609434f15c2541778074f&units=metric`
      )
        .then((response) => response.json())
        // update the results
        .then((results) =>  console.log(results));
    };
    
    return (
      <>
        <Row>
          <Col>
            <h1>Search your city</h1>
          </Col>
        </Row>
  
        <Row>
          <Col xs={4} className="text-center">
            <FormControl
              placeholder="Enter city"
              onChange={(event) => setCity(event.target.value)}
              value={city}
            />
          </Col>
        </Row>
  
        <Row>
          <Col>
            <Button onClick={onSearch}>Check Weather</Button>
          </Col>
        </Row>
      </>
    );
  };

  export default CitySelector;
