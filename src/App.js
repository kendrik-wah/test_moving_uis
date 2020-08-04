import React from 'react';
import {ArrowAltCircleDown} from '@styled-icons/fa-solid/ArrowAltCircleDown';
import NavigationBar from './navigation_bar/NavigationBar.js';
import Reasons from './reasons/Reasons.js';
import Frame1 from './frame1/Frame1.js';
import Frame2 from './frame2/Frame2.js';

import './App.css';

function handleClick() {
  var element = document.getElementById("Frame1-header");
  element.scrollIntoView({behavior: "smooth", block: "center"});
}

function App() {

  return (
    <div className="App">

      <div className="NavigationBar-header">
        <NavigationBar className="NavigationBar"/>
      </div>

      <div className="Reasons-header">
        <Reasons className="Reasons"/>
        <ArrowAltCircleDown size="30" className="Reasons-arrow pulse" onClick={handleClick}/>
      </div>

      <div className="Frame1-header" id="Frame1-header">
        <div className="Frame1-frame">
          <Frame1 onLoad={Frame1.handleShow}/>
        </div>
      </div>

    </div>
  );
}

export default App;
