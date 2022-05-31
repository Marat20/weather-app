import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch } from 'react-redux';
import { deleteCity } from '../store/cities/actionsCities';

export const City = ({ city }) => {
  const { temp, cityName, country, condition, icon, id } = city;
  const dispatch = useDispatch();

  const handleDeleteCity = (id) => {
    dispatch(deleteCity(id));
  };

  return (
    <li className='city'>
      {/* <button 
        type="button" 
        onClick={() => handleDeleteCity(id)} 
        className="btn-close" 
        aria-label="Close">
      </button> */}
      <h2 className='city-name'>
        <span>{cityName}</span>
        <sup>{country}</sup>
      </h2>
      <div className='city-temp'>
        {temp}
        <sup>°C</sup>
      </div>
      <figure>
        <img className='city-icon' src={icon} alt={condition} />
        <figcaption>{condition}</figcaption>
      </figure>
    </li>
  );
};
