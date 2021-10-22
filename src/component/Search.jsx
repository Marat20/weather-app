import { useState } from "react";

export const Search = ({handleSearch= Function.prototype}) => {
    const [value, setValue] = useState('');

    const submit = (e) => {
      if(!value) return
        e.preventDefault();
        handleSearch(value);
        setValue('')
    }
    const handleKey = (e) => {
        if (e.Key === 'Enter') submit(e)
    }

  return (
    <form onSubmit={submit}>
      <input 
      type='text' 
      placeholder='Search for a city' 
      autoFocus
      onChange={e => setValue(e.target.value)}
      value={value}
      onKeyDown={handleKey}
      />
      <button type='submit'>SUBMIT</button>
      <span className='msg'></span>
    </form>
  );
};
