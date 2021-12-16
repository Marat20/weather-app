import React from 'react';
import { Search } from './component/Search';
import { City } from './component/City';
import { useSelector, useDispatch } from 'react-redux';
import { getCities, getValidCity } from './store/cities/selectorCities';
import { addCityWithThunk } from './store/cities/actionsCities';
// const API_KEY = '4d8fb5b93d4af21d66a2948710284366';

export const App = () => {
  const cities = useSelector(getCities);
  const validCity = useSelector(getValidCity);
  const dispatch = useDispatch();

  const handleSearch = (city) => {
    dispatch(addCityWithThunk(city))
  }

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