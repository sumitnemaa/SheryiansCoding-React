import React from 'react'

const Login = ({setToggle}) => {
  return (
    <div className="login">
      <div className="page">
        <div className="note">
          <h1 className="">Hello</h1>
          <p className="">Welcome Back!</p>
        </div>

        <div className="loginCard">
          <div className="loginNote">
            <h2 className="loginText text">Login Account</h2>
            <p className="loginOther text">Welcome back! Please log in to continue where you left off.</p>

            <label className="email boxTitle">Email Address</label>
            <input type="email" placeholder="Your Email Address" className="emailbox box" />

            <label className="password boxTitle">Password</label>
            <input type="password" placeholder="********" className="passwordbox box" />

            <div className="info">
              <label className="savepassword">
                <input type="checkbox" className="checkbox" />
                <span>Save Password</span>
              </label>
              <button className="forgetpassword">Forgot Password?</button>
            </div>

            <button className="btn">Login Account</button>

            <button className="backbtn" onClick={() => setToggle(prev => !prev)}>Create New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login