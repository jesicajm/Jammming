import React from 'react';
import './SearchResults.css';
import Tracklist from '../tracklist/Tracklist';
//import Track from '../Track/Track';


function SearchResults({list}){
    return (
        <div className='Results'>
            <h4>Results</h4>
            <Tracklist list={list}/>
        </div>
    )
}

export default SearchResults;