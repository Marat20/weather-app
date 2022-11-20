import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/redux-hooks';
import { fetchCity } from '../../redux/slices/citiesSlice';

interface ValidCity {
  validCity: boolean;
}

export const Search = ({ validCity }: ValidCity) => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const submitCity = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (!value) return;
      if (value.includes(',')) {
        setValue(value.split(',')[0]);
      }
      dispatch(fetchCity(value));
      setValue('');
    }
  };

  return (
    <div className='city-form'>
      <input
        type='text'
        placeholder='Search for a city'
        autoFocus
        onChange={(e) => setValue(e.target.value)}
        value={value}
        onKeyDown={submitCity}
      />
      <button type='submit'>SUBMIT</button>
      <span className='msg'>
        {!validCity && 'Please search for a valid city'}
      </span>
    </div>
  );
};
