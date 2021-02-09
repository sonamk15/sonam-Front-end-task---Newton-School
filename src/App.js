import React from 'react';
import CitySelector from './components/CitySelector';
import './App.css';
import {Container} from 'react-bootstrap';
import UseFetch from './hooks/UseFetch'
import WeatherList from './components/WeatherList';
import {API_KEY, API_BASE_URL} from './apis/config'

const App = () => {
const {data, error, isLoading, setUrl} = UseFetch();

const getContent = () => {
      if(error) return <h2>Error when fetching: {error}</h2>
      if(!data && isLoading) return <h2>LOADING...</h2>
      if(!data) return null;
      return <WeatherList weathers={data.list} />
};

return (
    <Container className="App">
        <CitySelector onSearch={(city) => setUrl(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&appid=6f7d192ff98609434f15c2541778074f&units=metric`)} />
      {getContent()}
    </Container>
  );
};

export default App;
