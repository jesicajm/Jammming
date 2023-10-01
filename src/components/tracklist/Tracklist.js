import React from 'react';
import './Tracklist.css'
import Track from '../Track/Track';

function Tracklist({list}){
   return (
      <ul className='Tracklist'>
        {list.map(song => 
            <Track name={song.nameSong} />
        )}
      </ul>
   )
}

export default Tracklist;