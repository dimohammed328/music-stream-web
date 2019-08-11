import React, { Component } from 'react';
import './SongCard.scss';
import Play from '../assets/Play';
import Music from './../assets/Music';
class SongCard extends Component {
  constructor(props) {
    super(props);
    this.onEnter = this.onEnter.bind(this);
    this.onLeave = this.onLeave.bind(this);
    this.state = {
      hovered: false,
      playing: false,
    };
  }
  onEnter() {
    this.setState({ hovered: true });
  }
  onLeave() {
    this.setState({ hovered: false });
  }
  render() {
    let image;
    if (this.state.hovered) {
      image = <Play />;
    } else {
      image = <Music />;
    }
    return (
      <div
        className={`row`}
        onMouseEnter={this.onEnter}
        onMouseLeave={this.onLeave}
        onClick={() => this.props.setCurrentSong(this.props.id)}>
        {image}
        <div className="text title-artist">
          <div id="title">{this.props.title}</div>
          <div id="id">{this.props.artist}</div>
        </div>
        <div className="text">
          <div id="time">{this.props.duration}</div>
        </div>
      </div>
    );
  }
}
export default SongCard;
