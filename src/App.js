import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';

function App() {

  const [choosen, setChoosen] = useState("Bruiorian")

  const checkBackground = () => {
    const backgrounds = {
      "Landiarian": require('./components/images/background.png'),
      "Bruiorian": require('./components/images/orc_background.png'),
      "Rakalvian": require('./components/images/troll_background.png')
    }
    return backgrounds[choosen]
  }

  return (
    <div className="App" style={{ background: `url(${checkBackground()})`}}>
      <div className="dark-overlay"></div>
      <Card name="Landiarian" choosen={choosen} pick={setChoosen} />
      <Card name="Bruiorian" choosen={choosen} pick={setChoosen} />
      <Card name="Rakalvian" choosen={choosen} pick={setChoosen} />
    </div>
  );
}

export default App;
