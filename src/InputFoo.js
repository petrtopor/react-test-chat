import React, { Component } from 'react';

const InputFoo = props =>
  <div className="inputContainer">
    <input placeholder="foofoo" value={props.value} onChange={props.onChange}/>
  </div>

export default InputFoo