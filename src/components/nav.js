import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
        <div>
        <h4>Inst App</h4>
          <ul className="Navigation">
            <li><a href="/">Home</a></li>
            <li><a href="/stuff">Stuff</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div className="content">

          </div>
        </div>
    );
  }
}

export default Nav;
