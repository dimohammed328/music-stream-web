import React, { Component } from 'react';
import SongCard from './SongCard';
import './SongList.scss';
import { Scrollbars } from 'react-custom-scrollbars';
export default class SongList extends Component {
  render() {
    return (
      <div className="song-area">
        <div className="header">
          <div>{this.props.type === 'QUEUE' ? 'Queue' : 'Track List'}</div>
        </div>
        <Scrollbars className="scroll-area" hideTracksWhenNotNeeded={false} autoHide={true}>
          <div className="song-list">
            {this.props.songList.map(song => {
              return (
                <SongCard
                  title={song.title}
                  artist={song.artist}
                  id={song.id}
                  type={this.props.type}
                  setCurrentSong={this.props.setCurrentSong}
                  key={song.id}
                />
              );
            })}
          </div>
        </Scrollbars>
      </div>
    );
  }
}
