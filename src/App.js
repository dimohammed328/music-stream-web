import React from 'react';
import './App.scss';
import SongListContainer from './redux/containers/SongListContainer';
import NowPlayingContainer from './redux/containers/NowPlayingContainer';
function App() {
  return (
    <div className="App">
      <SongListContainer />

      <NowPlayingContainer />
    </div>
  );
}

export default App;
