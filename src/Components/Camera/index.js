import React from 'react';

export default (props) => {
  let {xP, yP, zP} = props
  return (
  <a-entity id="rig" position={'0 0 25'}>
    <a-entity id="camera" camera look-controls></a-entity>
  </a-entity>
)}
