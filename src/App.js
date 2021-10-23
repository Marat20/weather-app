import './App.css';
import React, {useState, useEffect} from 'react';
import { Search } from './component/Search';
import { City } from './component/City';
const API_KEY = '4d8fb5b93d4af21d66a2948710284366';

function App() {
  const [city, setCity] = useState([]);
  const [fetchCity, setFetchCity] = useState([]);
  const [validCity, setValidCity] = useState(true);

  const handleSearch = (city) => {
    setCity(prevState => {
      return [...prevState, city]
    })
  }
  
  useEffect(() => {
    if (city.length > 0) {
      const currentCity = city.slice(-1);
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${API_KEY}&units=metric`;
      fetch(URL).then(res => res.json()).then(data => {
        const { main, name, sys, weather } = data;
        const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]['icon']}.svg`;
        setFetchCity(prevState => {
          return [...prevState, {main, name, sys, weather, icon}]
        })
        setValidCity(true)
      }).catch(() => {
        setValidCity(false)
      });
  }
  }, [city])

  return (
    <>
    <section className="top-banner">
      <div className="container">
        <h1 className="heading">Simple Weather App</h1>
        <Search handleSearch={handleSearch} validCity={validCity}/>
      </div>
    </section>
    <section className='ajax-section'>
      <div className='container'>
        <ul className='cities'>
          {
            fetchCity && fetchCity.map((el, key) => {
              return <City key={key} city={el}/>
            })
          }
        </ul>
      </div>
    </section>
    
    </>
  )
}

export default App;