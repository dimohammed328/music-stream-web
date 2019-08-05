import React from 'react';
import './App.scss';
import SongList from './components/common/SongList';
import NowPlaying from './components/NowPlaying/NowPlaying';
function App() {
  return (
    <div className="App">
      <SongList />

      <NowPlaying />
    </div>
  );
}

export default App;
