import React, { Component } from 'react';
import SongCard from './SongCard';
import './Queue.scss';
import { Scrollbars } from 'react-custom-scrollbars';
export default class SongList extends Component {
  render() {
    return (
      <div className="queue-area">
        <div className="queue-header">
          <div>{this.props.type === 'QUEUE' ? 'Queue' : 'Track List'}</div>
        </div>
        <Scrollbars className="scroll-area" hideTracksWhenNotNeeded={false} autoHide={true}>
          <div className="queue">
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
