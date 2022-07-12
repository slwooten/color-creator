import './App.css';

import './fonts/RobotoMono-VariableFont_wght.ttf';

import ButtonContainer from './components/Buttons';
import Header from './components/Header';
import PaletteContainer from './components/PaletteContainer';
import Samples from './Samples';

function App() {
  return (
    <>
      <Header />
      <Samples />
      <ButtonContainer />
      <PaletteContainer />
    </>
  );
}

export default App;
