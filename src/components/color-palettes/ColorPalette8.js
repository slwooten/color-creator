import React, { useState, useRef, useEffect } from 'react';

export default function ColorPalette8() {

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
    const primary8 = document.querySelector('#primary-8');
    const secondary8 = document.querySelector('#secondary-8');
    // SELECTS BACKGROUND COLOR OF PRIM/SEC COLOR DIVS //
    const primary8Color = primary8.style.backgroundColor;
    const secondary8Color = secondary8.style.backgroundColor;
    // SETS EXAMPLE BUTTONS BG and FONT COLOR EQUAL TO SELECTED PALETTE //
    if (lightOrDark(primary8Color) === 'light') {
      primaryBtn.setAttribute('style', `background-color: ${primary8Color}; color: black`);
    } else {
      primaryBtn.setAttribute('style', `background-color: ${primary8Color}; color: white`);
    };

    if (lightOrDark(secondary8Color) === 'light') {
      secondaryBtn.setAttribute('style', `background-color: ${secondary8Color}; color: black`);
    } else {
      secondaryBtn.setAttribute('style', `background-color: ${secondary8Color}; color: white`);
    }
  }

  const setCardColors = () => {
    console.log('card colors function');
    // SELECTS TEXT CARD ELEMENTS //
    const textCardContainer = document.querySelector('#text-card-container');
    const textCardHeading = document.querySelector('#text-card-heading');
    const textCardSubheading = document.querySelector('#text-card-subheading');
    // SELECTS FORM CARD ELEMENTS //
    const formCardContainer = document.querySelector('#form-card-container');
    const signInText = document.querySelector('#sign-in-text');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirm-password');
    const signUpText = document.querySelector('#signup-text');
    // SELECTS PRIMARY AND SECONDARY COLOR DIVS //
    const primary1 = document.querySelector('#primary-8');
    const secondary1 = document.querySelector('#secondary-8');
    // SELECT BG COLOR OF PRIM/SEC COLOR DIVS //
    const primary1Color = primary1.style.backgroundColor;
    const secondary1Color = secondary1.style.backgroundColor;
    // SETS COLOR OF TEXT CARD ELEMENTS //
    textCardContainer.setAttribute('style', `border: ${primary1Color} 2px solid`);
    textCardHeading.setAttribute('style', `color: ${primary1Color}`);
    textCardSubheading.setAttribute('style', `color: ${secondary1Color}`);
    // SETS COLOR OF FORM CARD ELEMENTS //
    formCardContainer.setAttribute('style', `border: ${primary1Color} 2px solid`);
    signInText.setAttribute('style', `color: ${secondary1Color}`);
    email.setAttribute('style', `color: ${primary1Color}`);
    password.setAttribute('style', `color: ${primary1Color}`);
    confirmPassword.setAttribute('style', `color: ${primary1Color}`);
    if (lightOrDark(secondary1Color) === 'light') {
      signUpText.setAttribute('style', `background-color: ${secondary1Color}; color: black`);
    } else {
      signUpText.setAttribute('style', `background-color: ${secondary1Color}; color: white`);
    }
  }

  useEffect(() => {
    setRandomColor();
  }, []);

  return (
    <>
      <div className='btn-and-palette'>
        <div className='new-colors-btn'>
          <span onClick={handleColorChange}>🔄</span>
        </div>
        <div className='palette' onClick={() => { setButtonColor(); setCardColors();}} >
          <div className='primary-palette'>
            <div className='primary-color big-color' id='primary-8' ref={primRef}></div>
            <div className='variation-container' ref={primDarkRef}></div>
            <div className='variation-container' ref={primLightRef}></div>
          </div>
          <div className='secondary-palette'>
            <div className='secondary-color big-color' id='secondary-8' ref={secRef}></div>
            <div className='variation-container' ref={secDarkRef}></div>
            <div className='variation-container' ref={secLightRef}></div>
          </div>
        </div>
      </div>
    </>
  );
}
