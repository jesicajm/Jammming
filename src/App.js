import React, { useState } from 'react';
import './App.css';
import SearchBar from'./components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/playlist/Playlist';


const listSpotify = [
  {nameSong: 'tiempo de espera'},
   {nameSong: 'dejame a mi'}
];

function App() {
  const [customList, setCustomList] = useState([{nameSong:'test song'}]);

  const addSong = (song) => {
      setCustomList((customList) => 
        [song, ...customList]
      ) 
  }

    const removeSong = (nameSong) => {
      setCustomList((customList) => customList.filter((song) => song.nameSong !== nameSong))
    }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Ja<span>mmm</span>ing</h1>
      </header>
      <SearchBar />
      <div className='Container-results-playlist'>
         <SearchResults list={listSpotify} actionList={addSong} />
         <Playlist list={customList} actionList={removeSong}/>
      </div>
    </div>
  );
}

export default App;
