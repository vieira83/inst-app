import React from 'react';

const Login = () =>{
  return (
    <div className="container">
    <div className="center-form panel text-center">
      <div className="panel-body">
        <h4 className="text-center"><i className="ion-log-in"></i> Log in</h4>
        <form action="/login-app" method="post" className="form-horizontal">
          <div className="form-group">
              <label className="col-sm-4 control-label">Username:</label>
              <div className="col-sm-5">
                <input type="password" className="form-control" type="text" name="username" placeholder="username"/>
              </div>
          </div>
          <div className="form-group">
              <label className="col-sm-4 control-label">Password:</label>
              <div className="col-sm-5">
                <input type="password" className="form-control" type="password" name="password" placeholder="Password"/>
              </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-4 col-sm-5">
              <input className="btn btn-success btn-block" type="submit" value="Log In"/>
              <a href="/sign-up">Sign up</a>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}
export default Login;
