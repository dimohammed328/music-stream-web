import React, { Component } from 'react';

export default class Pause extends Component {
  render() {
    return (
      <div onClick={this.props.pauseMusic}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" style={{ fill: '#fce9da' }} />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </div>
    );
  }
}
