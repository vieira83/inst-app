// ./src/common/main.component.jsx
import React, {Component} from 'react';
import '../nav.css';

class Nav extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-default navbar-static-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                              <img alt="Brand" src="/static/media/logo.5d5d9eef.svg"/> <small>Inst App</small></a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="active">
                                  <a href="/sign-up">Sign Up <span className="sr-only">(current)</span></a>
                                </li>
                                <li><a href="/login-app">Login</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Nav
