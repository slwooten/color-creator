import React from 'react';
import ColorPalette from './ColorPalette';
import ColorPalette2 from './ColorPalette2';
import ColorPalette3 from './ColorPalette3';
import ColorPalette4 from './ColorPalette4';
import ColorPalette5 from './ColorPalette5';
import ColorPalette6 from './ColorPalette6';
import ColorPalette7 from './ColorPalette7';
import ColorPalette8 from './ColorPalette8';

export default function PaletteContainer() {
  return (
    <>
      <div className='btn-container'>
        <button className='example-btn' id='primary-btn'>Primary Button</button>
        <button className='example-btn' id='secondary-btn'>Secondary Button</button>
      </div>
      <section className='color-section'>
        <div className='palette-container'>
          <ColorPalette />
          <ColorPalette2 />
          <ColorPalette3 />
          <ColorPalette4 />
          <ColorPalette5 />
          <ColorPalette6 />
          <ColorPalette7 />
          <ColorPalette8 />
        </div>
      </section>
    </>
  )

}