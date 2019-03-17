import React, { Component } from 'react';
import './InputBar.scss';

const InputBar = props =>
  <div id="container">
    <input placeholder="barbar" value={props.value} onChange={props.onChange}/>
  </div>

export default InputBar