import './App.css';
import SearchBar from'./components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/playlist/Playlist';

const listSpotify = [
  {
    nameSong: 'tiempo de espera'
  },
  {
    nameSong: 'dejame a mi'
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ja<span>mmm</span>ing</h1>
      </header>
      <SearchBar />
      <div className='Container-results-playlist'>
         <SearchResults list={listSpotify} />
         <Playlist />
      </div>
    </div>
  );
}

export default App;
