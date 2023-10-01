import React from 'react';
import './Playlist.css'
import Button from '../Button';

function Playlist() {
    return (
        <div className='Playlist'>
            <input />
            <div style={{ textAlign: 'center' }}>
               <Button text="Save To Spotify" />
            </div>
        </div>
    )
}

export default Playlist;