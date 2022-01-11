import React from 'react';
import { BsFillXCircleFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { deleteCity } from '../store/cities/actionsCities';

export const City = ({ city }) => {
  const { main, name, sys, weather, icon, cityId } = city;
  const dispatch = useDispatch();

  const handleDeleteCity = (id) => {
    dispatch(deleteCity(id));
  };

  return (
    <li className='city'>
      <button onClick={() => handleDeleteCity(cityId)}>
        <BsFillXCircleFill />
      </button>
      <h2 className='city-name'>
        <span>{name}</span>
        <sup>{sys.country}</sup>
      </h2>
      <div className='city-temp'>
        {Math.round(main.temp)}
        <sup>°C</sup>
      </div>
      <figure>
        <img className='city-icon' src={icon} alt={weather[0]['description']} />
        <figcaption>{weather[0]['description']}</figcaption>
      </figure>
    </li>
  );
};
