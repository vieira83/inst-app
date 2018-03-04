import React, { Component } from 'react';
import logo from './../logo.svg';
// import './hero.css';

const Hero = (props) =>  {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{props.title}</h1>
          </header>
          <p className="App-intro">{props.description}</p>
        </div>
      </div>
    );
}

export default Hero;
