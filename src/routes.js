// React
import React from "react";
import PropTypes from 'prop-types';
// import {render} from "react-dom";
import {Router, Route} from "react-router";
// import { Provider } from 'react-redux';

const Root = (props) => (

 <Router {...props}>
   <Route path="/" >
       <Route path="/contact"  />
       <Route path="*"  />
   </Route>
 </Router>
);
//
Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
