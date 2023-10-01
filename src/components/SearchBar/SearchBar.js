import React from 'react';
import './SearchBar.css';
import Button from '../Button';

function SearchBar(){
    return (
       <div className='Container'>
          <input/>
          <Button text="Search"/>
       </div>
    )
}

export default SearchBar;