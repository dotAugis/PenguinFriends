import React from 'react';
import './SearchBox.css';


const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2'>
    <input 
    className='pa3 ba br3 tc'
    type='search' 
    placeholder='Search friends'
    onChange={searchChange}
    />
    </div>
  )
}

export default SearchBox;