import React, { Component } from 'react';
import './InputFoo.scss';

const InputFoo = props =>
  <div id="container">
    <input placeholder="foofoo" value={props.value} onChange={props.onChange}/>
  </div>

export default InputFoo