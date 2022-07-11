import React from 'react';
import ColorPalette from './color-palettes/ColorPalette';
import ColorPalette2 from './color-palettes/ColorPalette2';
import ColorPalette3 from './color-palettes/ColorPalette3';
import ColorPalette4 from './color-palettes/ColorPalette4';
import ColorPalette5 from './color-palettes/ColorPalette5';
import ColorPalette6 from './color-palettes/ColorPalette6';
import ColorPalette7 from './color-palettes/ColorPalette7';
import ColorPalette8 from './color-palettes/ColorPalette8';

export default function PaletteContainer() {
  return (
    <>
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
