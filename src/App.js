import React from 'react';
import { Search } from './component/Search';
import { City } from './component/City';
import { useSelector } from 'react-redux';
import { getCities, getValidCity } from './store/cities/selectorCities';

export const App = () => {
  const cities = useSelector(getCities);
  const validCity = useSelector(getValidCity);

  return (
    <>
    <section className="top-banner">
      <div className="container">
        <h1 className="heading">Simple Weather App</h1>
        <Search validCity={validCity}/>
      </div>
    </section>
    <section className='ajax-section'>
      <div className='container'>
        <ul className='cities'>
          {
            cities && cities.map((el) => {
              return <City key={el.cityId} city={el}/>
            })
          }
        </ul>
      </div>
    </section>
    </>
  )
}