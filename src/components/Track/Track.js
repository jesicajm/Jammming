import React from 'react';
import './Track.css';

function Track(props){
   const handleClick = () => {
      if(props.isCustomList){
         props.actionList(props.song.nameSong);
      }else{
         props.actionList(props.song);
      }
         
   }

    return (
        <li className='Track'>
           <div className='Track-info'>
              <span>{props.song.nameSong}</span>
              <span>ghghghg</span>
           </div>
           <span 
              className='Track-action'
              onClick={handleClick}
            >{props.isCustomList ? '-' : '+'}</span>
        </li>
        
    )
}

export default Track;