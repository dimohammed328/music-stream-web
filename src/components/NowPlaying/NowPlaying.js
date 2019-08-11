import React, { Component } from 'react';
import './NowPlaying.scss';
import ScrubBar from './ScrubBar';
import ReactCursorPosition from 'react-cursor-position';
import Shuffle from './../assets/Shuffle';
import SkipPrevious from './../assets/SkipPrevious';
import Play from './../assets/Play';
import SkipNext from './../assets/SkipNext';
import Repeat from './../assets/Repeat';
export default class NowPlaying extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.scrub = this.scrub.bind(this);
    this.state = {
      scrubPercent: 0,
    };
  }
  onClick(e) {
    console.log(this.props);
  }
  scrub(pos) {
    this.setState({ scrubPercent: pos });
  }
  render() {
    return (
      <div className="bar" onClick={e => this.onClick(e)}>
        <img src="https://material.angular.io/assets/img/examples/shiba1.jpg" alt="" />
        <div className="text">
          <div id="title">Track Name</div>
          <div id="artist">Artist</div>
        </div>
        <div className="controls">
          <div className="buttons">
            <Shuffle />
            <SkipPrevious />
            <Play />
            <SkipNext />
            <Repeat />
          </div>
          <ReactCursorPosition className="scrub-bar">
            <ScrubBar scrub={this.scrub} percent={this.state.scrubPercent.toString()} />
          </ReactCursorPosition>
        </div>
      </div>
    );
  }
}
