/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../assets/Images/logo.png'

const Complete = () => {
  return (
    <div className='skill-mx-auto'>
      <div className='complete-container'>
        <h2>Congratulations!</h2>
        <p>You have successfully verified your email address</p>
        <p className="complete-login">Please <Link className='complete-login-btn' to='/'>Log In</Link> Now</p>
        <div className="logo-box">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Complete;
