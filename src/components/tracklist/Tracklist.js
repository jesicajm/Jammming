import React from 'react';
import './Tracklist.css'
import Track from '../Track/Track';

function Tracklist({list, actionList, isCustomList}){
   return (
      <ul className='Tracklist'>
        {list.map(track => (
            <Track
               key={track.nameSong}
               song={track} 
               actionList={actionList}
               isCustomList={isCustomList}/>
        ))}
      </ul>
   )
}

export default Tracklist;