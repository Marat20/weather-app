import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCityWithThunk } from '../store/cities/actionsCities';


export const Search = ({ validCity }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (city) => {
    dispatch(addCityWithThunk(city))
  };

  const submit = (e) => {
    if (!value) return;
    if (value.includes(',')) {
      setValue(value.split(',')[0]);
    };
    e.preventDefault();
    handleSearch(value);
    setValue('');
  };

  const handleKey = (e) => {
    if (e.Key === 'Enter') submit(e);
  };

  return (
    <form onSubmit={submit}>
      <input
        type='text'
        placeholder='Search for a city'
        autoFocus
        onChange={(e) => setValue(e.target.value)}
        value={value}
        onKeyDown={handleKey}
      />
      <button type='submit'>SUBMIT</button>
      <span className='msg'>
        {!validCity && 'Please search for a valid city'}
      </span>
    </form>
  );
};
