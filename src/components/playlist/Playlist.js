import React, { useState } from 'react';
import './Playlist.css'
import Button from '../Button';
import Tracklist from '../tracklist/Tracklist';

function Playlist({list, actionList}) {
    const [nameCustomList, setNameCustomList] = useState('')

    const handleOnChange = ({target}) => {
       setNameCustomList(target.value)
    }

    return (
        <div className='Playlist'>
            <input 
               value={nameCustomList}
               onChange={handleOnChange}/>
            <Tracklist 
               list={list} 
               actionList={actionList}
               isCustomList={true} />
            <div style={{ textAlign: 'center' }}>
               <Button text="Save To Spotify" />
            </div>
        </div>
    )
}

export default Playlist;