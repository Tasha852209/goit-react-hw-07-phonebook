import React from 'react';
import css from './Filter.module.css';
export const Filter = ({ value, handleFilterContacts }) => {
  const handleChange = e => handleFilterContacts(e.target.value);
  return (
    <div className={css.filter}>
      <p>Find contacts by name</p>
      <input value={value} type="text" onChange={handleChange} />
    </div>
  );
};
