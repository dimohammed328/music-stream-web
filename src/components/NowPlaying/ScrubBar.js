import React, { Component } from 'react';
import './ScrubBar.scss';
export default class ScrubBar extends Component {
  constructor(props) {
    super(props);

    this.scrub = this.scrub.bind(this);
  }
  scrub() {
    this.props.scrub((this.props.position.x / this.props.elementDimensions.width) * 100);
  }
  render() {
    return (
      <div className="total" onClick={this.scrub}>
        <div className="current" style={{ width: `${this.props.percent}%` }} />
      </div>
    );
  }
}
