import React, { Component } from 'react'
import "./Heropage.css";

export class heropage extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className='background'>
        <div className='box'>
            <div className='register-box'>
                <p> Register</p>
            </div>

            <div className='login-box'>
            <h1>Login</h1>
            <input
            type="text"
            placeholder="e-mail"
            onChange={(e) => {
              setUsernameReg(e.target.value);
            }}
          />
          <label></label>
          <input
            type="text"
            placeholder="Password"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          />
          <button onClick={register}>Register</button>
            </div>
        </div>

    </div>
        
    
    )
  }
}

export default heropage
