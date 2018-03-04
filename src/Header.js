import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './components/nav';
import Hero from './components/hero';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Hero title="Inst App" description="Welcome to Inst App"/>
      </div>
    );
  }
}

export default Header;
