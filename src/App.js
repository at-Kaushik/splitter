import React, { useState } from 'react';

import InputSection from './components/InputSection';
import OutputSection from './components/OutputSection';

import './App.css';
import Logo from './assets/logo.svg';

function App() {

  const [calculatedTip, setCalTip] = useState('');
  const [totalAmt, setTotalAmt] = useState('');

  const getTipAmount = (tip, total) => {
    setCalTip(tip);
    setTotalAmt(total)
  }

  return (
    <div className="App">
      <div className="main-container">
        <div className="inner-container">
        <img src={ Logo } alt="logo" className="logo"/>
          <div className=" splitter-container">
            <InputSection acb={getTipAmount} />
            <OutputSection calculatedTip={calculatedTip} totalAmt={totalAmt} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
