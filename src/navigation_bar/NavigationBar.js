import React from 'react';
import Title from './Title/Title.js';
import Icons from './Icons/Icons.js';
import Options from './Options/Options.js';
import './NavigationBar.css';

function NavigationBar() {

  return (
    <div className="NavigationBar">
      <div className="NavigationBar-Top">
          <div className="top-title"><Title /></div>
          <div className="top-icons"><Icons /></div>
      </div>
      <div className="NavigationBar-Below">
          <div className="below-options"><Options /></div>
      </div>
    </div>
  )
}

export default NavigationBar;
