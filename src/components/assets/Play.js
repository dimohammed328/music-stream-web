import React from 'react';
export default function Play(props) {
  return (
    <div onClick={props.playMusic}>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" style={{ fill: '#fce9da' }} />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </div>
  );
}
