import React from "react";

export default function Form() {
  return (
    <div className="card-container form-card">
      <div className="have-account">
        <p className="question">Have an account?</p>
        <p className="sign-in">Sign-in &gt;</p>
      </div>
      <div className="input">
        <p className="label">Email</p>
        <input type='text' placeholder="Enter email"></input>
      </div>
      <div className="input">
        <p className="label">Password</p>
        <input type='text' placeholder="Create Password"></input>
      </div>
      <div className="input">
        <p className="label">Confirm Password</p>
        <input type='text' placeholder="Confirm Password"></input>
      </div>
      <button className="signup-btn">Sign Up</button>
    </div>
  )
}
