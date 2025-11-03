import React from 'react'

const JoinUs = ({setToggle}) => {
  return (
    <div className="joinus">
      <div className="page">
        <div className="note">
          <h1 className="">Join Us</h1>
          <p className="">Create Free Account</p>
        </div>

        <div className="joinUsCard">
          <div className="joinUsNote">
            <h2 className="joinUsText text">Personal Info</h2>
            <p className="joinUsOther text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className="">
              <h3 className='boxTitle'>Your Name</h3>
              <div className='username'>
                <input placeholder="First Name" className="box usernameBox" />
                <input placeholder="Last Name" className="box usernameBox" />
              </div>
            </div>

            <label className="boxTitle">Email Address</label>
            <input type="email" placeholder="Your Email Address" className="box" />

            <label className="boxTitle">Username</label>
            <input placeholder="example1234" className="box" />

            <button className="btn">Save &amp; Continue</button>

            <button className="backbtn" onClick={() => setToggle(prev => !prev)}>Back to Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUs