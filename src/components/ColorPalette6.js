import React, { useState, useRef } from 'react';

export default function ColorPalette6() {

  // INITIAL RANDOM RGB VALUES FOR PRIMARY COLORS //
  let randomRed = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  let randomGreen = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  let randomBlue = Math.floor(Math.random() * (255 - 0 + 1) + 0);

  // INITIAL RANDOM RGB VALUES FOR SECONDARY COLORS //
  let randomRedSec = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  let randomGreenSec = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  let randomBlueSec = Math.floor(Math.random() * (255 - 0 + 1) + 0);

  // REFERENCES //
  const primRef = useRef();
  const primDarkRef = useRef();
  const primLightRef = useRef();
  const secRef = useRef();
  const secDarkRef = useRef();
  const secLightRef = useRef();

  // STATES //
  let [red, setRed] = useState(randomRed);
  let [green, setGreen] = useState(randomGreen);
  let [blue, setBlue] = useState(randomBlue);

  let [redSec, setRedSec] = useState(randomRedSec);
  let [greenSec, setGreenSec] = useState(randomGreenSec);
  let [blueSec, setBlueSec] = useState(randomBlueSec);

  // DARK RGB VALUES //
  let darkRed = red * 0.50;
  let darkGreen = green * 0.50;
  let darkBlue = blue * 0.50;

  let darkRedSec = redSec * 0.50;
  let darkGreenSec = greenSec * 0.50;
  let darkBlueSec = blueSec * 0.50;

  // LIGHT RGB VALUES //
  let lightRed = red + (.50 * (255 - red));
  let lightGreen = green + (.50 * (255 - green));
  let lightBlue = blue + (.50 * (255 - blue));

  let lightRedSec = redSec + (.50 * (255 - redSec));
  let lightGreenSec = greenSec + (.50 * (255 - greenSec));
  let lightBlueSec = blueSec + (.50 * (255 - blueSec));

  // RGB VALUES FOR BACKGROUND COLOR ON EACH PALETTE //
  let primaryColor = `rgb(${red}, ${green}, ${blue})`;
  let primDark = `rgb(${darkRed}, ${darkGreen}, ${darkBlue})`;
  let primLight = `rgb(${lightRed}, ${lightGreen}, ${lightBlue})`;

  let secondaryColor = `rgb(${redSec}, ${greenSec}, ${blueSec})`;
  let secDark = `rgb(${darkRedSec}, ${darkGreenSec}, ${darkBlueSec})`;
  let secLight = `rgb(${lightRedSec}, ${lightGreenSec}, ${lightBlueSec})`;

  const setRandomColor = () => {
    console.log('btn working');
    // GRAB RANDOOM RGB VALUES FOR PRIMARY COLORS //
    randomRed = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    randomGreen = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    randomBlue = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    console.log(randomRed, randomGreen, randomBlue);

    // GRAB RANDOM RGB VALUES FOR SECONDARY COLORS //
    randomRedSec = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    randomGreenSec = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    randomBlueSec = Math.floor(Math.random() * (255 - 0 + 1) + 0);

    // SET PRIMARY COLORS //
    setRed(randomRed);
    setGreen(randomGreen);
    setBlue(randomBlue);

    // SET SECONDARY COLORS //
    setRedSec(randomRedSec);
    setGreenSec(randomGreenSec);
    setBlueSec(randomBlueSec);

    primRef.current.style.backgroundColor = primaryColor;
    primDarkRef.current.style.backgroundColor = primDark;
    primLightRef.current.style.backgroundColor = primLight;
    secRef.current.style.backgroundColor = secondaryColor;
    secDarkRef.current.style.backgroundColor = secDark;
    secLightRef.current.style.backgroundColor = secLight;
  }


  const handleColorChange = () => {
    setRandomColor();
  }

  // FUNCTION FOR CHECKING IF BG COLOR IS LIGHT OR DARK //
  const lightOrDark = (color) => {
    let r, g, b, hsp;

    color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

    r = color[1];
    g = color[2];
    b = color[3];

    hsp = Math.sqrt(
      0.299 * (r * r) +
      0.587 * (g * g) +
      0.114 * (b * b)
    );

    if (hsp > 127.5) {
      console.log(hsp, 'light');
      return 'light';
    } else {
      console.log(hsp, 'dark');
      return 'dark';
    }
  };

  const setButtonColor = () => {

    // SELECTS EXAMPLE BUTTONS //
    const primaryBtn = document.querySelector('#primary-btn');
    const secondaryBtn = document.querySelector('#secondary-btn');
    // SELECTS PRIMARY AND SECONDARY COLOR DIVS //
    const primary6 = document.querySelector('#primary-6');
    const secondary6 = document.querySelector('#secondary-6');
    // SELECTS BACKGROUND COLOR OF PRIM/SEC COLOR DIVS //
    const primary6Color = primary6.style.backgroundColor;
    const secondary6Color = secondary6.style.backgroundColor;
    // SETS EXAMPLE BUTTONS BG and FONT COLOR EQUAL TO SELECTED PALETTE //
    if (lightOrDark(primary6Color) === 'light') {
      primaryBtn.setAttribute('style', `background-color: ${primary6Color}; color: black`);
    } else {
      primaryBtn.setAttribute('style', `background-color: ${primary6Color}; color: white`);
    };

    if (lightOrDark(secondary6Color) === 'light') {
      secondaryBtn.setAttribute('style', `background-color: ${secondary6Color}; color: black`);
    } else {
      secondaryBtn.setAttribute('style', `background-color: ${secondary6Color}; color: white`);
    }
  }

  return (
    <>
      <div className='btn-and-palette'>
        <div className='new-colors-btn'>
          <span onClick={handleColorChange}>🔄</span>
        </div>
        <div className='palette' onClick={setButtonColor}>
          <div className='primary-palette'>
            <div className='primary-color big-color' id='primary-6' ref={primRef}></div>
            <div className='variation-container' ref={primDarkRef}></div>
            <div className='variation-container' ref={primLightRef}></div>
          </div>
          <div className='secondary-palette'>
            <div className='secondary-color big-color' id='secondary-6' ref={secRef}></div>
            <div className='variation-container' ref={secDarkRef}></div>
            <div className='variation-container' ref={secLightRef}></div>
          </div>
        </div>
      </div>
    </>
  );
}