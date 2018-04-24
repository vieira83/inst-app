import React from 'react';

const SigngUp = () =>{
  return (
    <div className="container">
    <div className="center-form panel text-center">
      <div className="panel-body">
        <h3 className="text-center"><i className="ion-log-in"></i> Sign up</h3>
        <form action="/sign-up" method="post" className="form-horizontal">
          <div className="form-group">
              <label className="col-sm-4 control-label">Username:</label>
              <div className="col-sm-6">
                <input type="password" className="form-control" type="text" name="username" placeholder="username"/>
              </div>
          </div>
          <div className="form-group">
              <label className="col-sm-4 control-label">Password:</label>
              <div className="col-sm-6">
                <input type="password" className="form-control" type="password" name="password" placeholder="Password"/>
              </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-4 col-sm-6">
              <input className="btn btn-success btn-block" type="submit" value="Sign Up"/>
            </div>
          </div>

          <br/>
          <p className="text-center text-muted">
            <span>Have an account? <a href="#/signup">Log in</a></span>
          </p>

          <div className="signup-or-separator">
            <span className="text">or</span>
            <hr></hr>
          </div>
          <br/>
          <div className="form-group">
            <div className="col-sm-offset-4 col-sm-5">
              <input className="btn btn-block btn-primary" value="Sign in with Instagram"/>
            </div>
          </div>

        </form>
      </div>
    </div>
    </div>
  )
}
export default SigngUp;
