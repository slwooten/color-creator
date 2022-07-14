import React from 'react';
import ColorPalette from './color-palettes/ColorPalette';

export default function PaletteContainer() {
  return (
    <>
      <section className='color-section'>
        <div className='palette-container'>
          <ColorPalette />
          <ColorPalette />
          <ColorPalette />
          <ColorPalette />
          <ColorPalette />
          <ColorPalette />
          <ColorPalette />
          <ColorPalette />
        </div>
      </section>
    </>
  )

}
