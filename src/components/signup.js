import React from 'react';

const SigngUp = () =>{
  return (
    <form action="/sign-up" method="post">
    <div>
        <label>First Name:</label>
        <input type="text" name="firstname"/>
    </div>
    <div>
        <label>Last Name:</label>
        <input type="text" name="lastname"/>
    </div>
      <div>
          <label>Username:</label>
          <input type="text" name="username"/>
      </div>
      <div>
          <label>Email:</label>
          <input type="email" name="email"/>
      </div>
      <div>
          <label>Password:</label>
          <input type="password" name="password"/>
      </div>
      <div>
          <label>Confirm Password:</label>
          <input type="confirm-password" name="confirm"/>
      </div>
      <div>
          <input type="submit" value="Create User"/>
      </div>
    </form>
  )
}
export default SigngUp;
