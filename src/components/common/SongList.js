import React, { Component } from 'react';
import SongCard from './SongCard';
import './SongList.scss';
import { Scrollbars } from 'react-custom-scrollbars';
export default class SongList extends Component {
  render() {
    return (
      <Scrollbars hideTracksWhenNotNeeded={false} autoHide={true}>
        <div className="song-list">
          {Array(50)
            .fill()
            .map((elem, i) => {
              return <SongCard key={i} />;
            })}
        </div>
      </Scrollbars>
    );
  }
}
