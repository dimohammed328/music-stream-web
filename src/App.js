import React from 'react';
import './App.scss';
import SongCard from './components/common/SongCard';

function App() {
    return (
        <div className="App">
            {Array(10)
                .fill()
                .map((elem, i) => {
                    return <SongCard key={i} />;
                })}
        </div>
    );
}

export default App;
