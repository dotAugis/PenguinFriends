import React from 'react';





const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2'>
    <input 
    className='pa3 ba b--green bg-orange'
    type='search' 
    placeholder='Search friends'
    onChange={searchChange}
    />
    </div>
  )
}

export default SearchBox;