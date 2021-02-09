import React from 'react';
import './App.css';
import CitySelector from './components/CitySelector';
import {Container} from 'react-bootstrap';
import UseFetch from './hooks/UseFetch'
import WeatherList from './components/WeatherList';

const App = () => {
  
const {data, error, setUrl} = UseFetch();

const getContent = () => {
      if(error) {
        return <h2>Error when fetching: {error}</h2>
      }
      if(!data) {
        return null;
      } 
      else {
        return <WeatherList weathers={data.list} />

      }
};

return (
    <Container className="App">
        <CitySelector onSearch={(city) => setUrl(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&appid=6f7d192ff98609434f15c2541778074f&units=metric`)} />
      {getContent()}
    </Container>
  );
};

export default App;
