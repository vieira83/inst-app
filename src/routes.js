// React
import React from "react";
import PropTypes from 'prop-types';
// import {render} from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
// import { Provider } from 'react-redux';
import Header from './Header';
import LoginApp from './components/login';
import SigngUp from './components/signup';

const Root = (props) => (
  <Router>
    <div>
        <Header />
        <Route exact path="/"  />
        <Route exact path="/login-app" component={LoginApp} />
        <Route exact path="/sign-app" component={SigngUp} />
    </div>
  </Router>
);
//
Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
