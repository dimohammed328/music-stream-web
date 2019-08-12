import React from 'react';
import './App.scss';
import SongListContainer from './redux/containers/SongListContainer';
import NowPlayingContainer from './redux/containers/NowPlayingContainer';
import QueueContainer from './redux/containers/QueueContainer';
function App() {
  return (
    <div className="App">
      <div className="main">
        <SongListContainer />
        <QueueContainer />
      </div>
      <NowPlayingContainer />
    </div>
  );
}

export default App;
