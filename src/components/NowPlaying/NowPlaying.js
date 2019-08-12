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
import Pause from './../assets/Pause';
import soundFile from './../assets/test.mp3';
export default class NowPlaying extends Component {
  constructor(props) {
    super(props);
    this.scrub = this.scrub.bind(this);
    this.toggleTitle = this.toggleTitle.bind(this);
    this.toggleArtist = this.toggleArtist.bind(this);
    this.playMusic = this.playMusic.bind(this);
    this.pauseMusic = this.pauseMusic.bind(this);
    this.secondsToTime = this.secondsToTime.bind(this);
    this.state = {
      scrubPercent: 0,
      titleTooltipIsOpen: false,
      artistTooltipIsOpen: false,
      audio: new Audio(soundFile),
      // audio: new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'),
      playing: false,
      currentTime: 0,
      currentTimeString: '0:00',
      duration: 0,
      durationString: '0:00',
    };
  }
  scrub(pos) {
    let audio = this.state.audio;
    audio.currentTime = (this.state.duration * Number(pos)) / 100;
    this.setState({ scrubPercent: pos, playing: true, audio });
    this.state.audio.play();
  }
  toggleTitle() {
    this.setState({ titleTooltipIsOpen: !this.state.titleTooltipIsOpen });
  }
  toggleArtist() {
    this.setState({ artistTooltipIsOpen: !this.state.artistTooltipIsOpen });
  }
  playMusic() {
    this.state.audio.play();
    this.setState({ playing: true });
  }
  pauseMusic() {
    this.state.audio.pause();
    this.setState({ playing: false });
  }
  secondsToTime(seconds) {
    console.log(seconds);
    return `${Math.floor(seconds / 60).toString()}:${(seconds % 60).toString().padStart(2, '0')}`;
  }
  componentDidMount() {
    this.state.audio.addEventListener('timeupdate', e => {
      console.log('here');
      this.setState({ currentTime: Math.floor(e.target.currentTime), duration: Math.floor(e.target.duration) });
      this.setState({
        currentTimeString: this.secondsToTime(this.state.currentTime),
        durationString: this.secondsToTime(this.state.duration),
        scrubPercent: (this.state.currentTime * 100) / this.state.duration,
      });
    });
  }
  componentWillUnmount() {
    this.state.audio.removeEventListener('timeupdate', () => {});
  }

  render() {
    let playPause;
    if (!this.state.playing) {
      playPause = <Play playMusic={this.playMusic} />;
    } else {
      playPause = <Pause pauseMusic={this.pauseMusic} />;
    }
    return (
      <div className="bar">
        <div className="info">
          <img src={this.props.currentSong.picture} alt="" />
          <div className="text">
            <div className="overflowWrapper">
              <div id="TitleToolTip" className="title">
                {this.props.currentSong.title}
              </div>
              <Tooltip
                placement="auto"
                isOpen={this.state.titleTooltipIsOpen}
                target="TitleToolTip"
                toggle={this.toggleTitle}>
                {this.props.currentSong.title}
              </Tooltip>

              <div id="ArtistToolTip" className="artist">
                {this.props.currentSong.artist}
              </div>
              <Tooltip
                placement="auto"
                isOpen={this.state.artistTooltipIsOpen}
                target="ArtistToolTip"
                toggle={this.toggleArtist}>
                {this.props.currentSong.artist}
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="controls">
          <div className="buttons">
            <Shuffle />
            <SkipPrevious />
            {playPause}
            <SkipNext />
            <Repeat />
          </div>
          <div className="scrub-bar-holder">
            <div className="scrub-time">{this.state.currentTimeString}</div>
            <ReactCursorPosition className="scrub-bar">
              <ScrubBar scrub={this.scrub} percent={this.state.scrubPercent.toString()} />
            </ReactCursorPosition>
            <div className="scrub-time">{this.state.durationString}</div>
          </div>
        </div>
      </div>
    );
  }
}
