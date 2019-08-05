import React, { Component } from 'react';
import './SongCard.scss';
import Play from '../assets/Play';
import Music from './../assets/Music';
class SongCard extends Component {
    constructor(props) {
        super(props);
        this.onEnter = this.onEnter.bind(this);
        this.onLeave = this.onLeave.bind(this);
        this.togglePlay = this.togglePlay.bind(this);
        this.state = {
            hovered: false,
            audio: new Audio('http://streaming.tdiradio.com:8000/house.mp3'),
            playing: false,
        };
    }
    onEnter() {
        this.setState({ hovered: true });
    }
    onLeave() {
        this.setState({ hovered: false });
    }
    togglePlay() {
        console.log('here');
        if (this.state.playing) {
            this.state.audio.pause();
            this.setState({ playing: false });
        } else {
            this.state.audio.play();
            this.setState({ playing: true });
        }
    }

    render() {
        let image;
        if (this.state.hovered) {
            image = <Play togglePlay={this.togglePlay} />;
        } else {
            image = <Music />;
        }
        return (
            <div className={`row`} onMouseEnter={this.onEnter} onMouseLeave={this.onLeave}>
                {image}
                <div className="text title-artist">
                    <div id="title">Track Name</div>
                    <div id="id">Artist</div>
                </div>
                <div className="text">
                    <div id="time">3:00</div>
                </div>
            </div>
        );
    }
}
export default SongCard;
