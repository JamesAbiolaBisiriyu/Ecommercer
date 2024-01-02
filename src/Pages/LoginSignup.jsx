import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name"/><br/>
          <input type="email" placeholder="Email Address"/><br/>
          <input type="password" id="pwd" placeholder="Password"/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Alraedy have an Account? <span>Login Here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />  
          <p>By Continuing, i agree to the terms of use & privacy policy. </p>   
        </div>
      </div>

    </div>
  )
}

export default LoginSignup