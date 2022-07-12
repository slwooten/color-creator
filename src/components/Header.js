import React from "react";

export default function Header() {
  return (
    <header>
      <div className="logo-container">
        <div className="logo">
          <h1>
            <span className="red">C</span>
            <span className="yellow">o</span>
            <span className="blue">l</span>
            <span className="red">o</span>
            <span className="yellow">r</span>
            <span className="blue"> </span>
            <span className="red">C</span>
            <span className="yellow">r</span>
            <span className="blue">e</span>
            <span className="red">a</span>
            <span className="yellow">t</span>
            <span className="blue">o</span>
            <span className="red">r</span>
            <span>™️</span>
          </h1>
        </div>
        <div className="intro">
          <h2>Welcome to Color Creator!</h2>
          <div className="intro-text">
            <p>Below you will find 8 different color palettes. Click on each to see what certain page elements might look like with that color scheme applied to them.</p>
          </div>
        </div>
      </div>
    </header>
  )
}
