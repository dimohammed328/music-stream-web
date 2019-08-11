import React, { Component } from 'react';
import './NowPlaying.scss';
import ScrubBar from './ScrubBar';
import ReactCursorPosition from 'react-cursor-position';
import Shuffle from './../assets/Shuffle';
import SkipPrevious from './../assets/SkipPrevious';
import Play from './../assets/Play';
import SkipNext from './../assets/SkipNext';
import Repeat from './../assets/Repeat';
import { Tooltip } from 'reactstrap';
export default class NowPlaying extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.scrub = this.scrub.bind(this);
    this.toggleTitle = this.toggleTitle.bind(this);
    this.state = {
      scrubPercent: 0,
      titleTooltipIsOpen: false,
    };
  }
  onClick(e) {
    console.log(this.props);
  }
  scrub(pos) {
    this.setState({ scrubPercent: pos });
  }
  toggleTitle() {
    this.setState({ titleTooltipIsOpen: !this.state.titleTooltipIsOpen });
  }
  render() {
    return (
      <div className="bar" onClick={e => this.onClick(e)}>
        <div className="info">
          <img src={this.props.currentSong.picture} alt="" />
          <div className="text">
            <div id="title" onMouseEnter={this.showTitle} href="#" onMouseDownCapture={this.hideTitle}>
              {this.props.currentSong.title}
            </div>
            <Tooltip placement="top" target="title" isOpen={this.state.titleTooltipIsOpen} toggle={this.toggleTitle}>
              {this.props.currentSong.title}
            </Tooltip>
            <div id="artist">{this.props.currentSong.artist}</div>
          </div>
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
