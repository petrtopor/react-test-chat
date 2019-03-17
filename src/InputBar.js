import React, { Component } from 'react';
// import './InputBar.scss';

const InputBar = props =>
  <div className="inputContainer">
    <input placeholder="barbar" value={props.value} onChange={props.onChange}/>
  </div>

export default InputBar