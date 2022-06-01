import React from 'react';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
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
        <Button 
        type="primary"
        shape="circle"
        icon={<CloseOutlined />}
        size='large'
        onClick={() => handleDeleteCity(id)}
        />
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
