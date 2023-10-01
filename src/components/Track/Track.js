import React from 'react';
import './Track.css';

function Track(props){

   // const handleClick = 

    return (
        <li className='Track'>
           <div className='Track-info'>
              <span>{props.name}</span>
              <span>ghghghg</span>
           </div>
           <span 
              className='Track-action'
              >+</span>
        </li>
        
    )
}

export default Track;