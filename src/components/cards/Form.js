import React from "react";

export default function Form() {
  return (
    <div className="card-container form-card" id="form-card-container">
      <div className="have-account">
        <p className="question">Have an account?</p>
        <p className="sign-in" id="sign-in-text">Sign-in &gt;</p>
      </div>
      <div className="input">
        <p className="label" id="email">Email</p>
        <input type='text' placeholder="Enter email"></input>
      </div>
      <div className="input">
        <p className="label" id="password">Password</p>
        <input type='text' placeholder="Create Password"></input>
      </div>
      <div className="input">
        <p className="label" id="confirm-password">Confirm Password</p>
        <input type='text' placeholder="Confirm Password"></input>
      </div>
      <button className="signup-btn" id="signup-text">Sign Up</button>
    </div>
  )
}
