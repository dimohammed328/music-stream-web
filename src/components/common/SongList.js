import React, { Component } from 'react';
import SongCard from './SongCard';
import './SongList.scss';
import { Scrollbars } from 'react-custom-scrollbars';
export default class SongList extends Component {
  render() {
    return (
      <Scrollbars hideTracksWhenNotNeeded={false} autoHide={true}>
        <div className="song-list">
          {this.props.songList.map(song => {
            return (
              <SongCard
                title={song.title}
                artist={song.artist}
                id={song.id}
                setCurrentSong={this.props.setCurrentSong}
                key={song.id}
              />
            );
          })}
        </div>
      </Scrollbars>
    );
  }
}
