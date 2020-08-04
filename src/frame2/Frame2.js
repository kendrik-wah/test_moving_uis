import React from 'react';
import './Frame2.css';

var image = process.env.PUBLIC_URL + '/frame2/cat2.png';
var scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow;

function loop() {

  Array.prototype.forEach.call(elementsToShow, function(element){
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

function isElementInViewport(el) {

  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

function handleShow() {

  elementsToShow = document.querySelectorAll('.show-on-scroll');
  loop();
}

function Frame2() {

  return (
    <div className='frame2-div show-on-scroll'>
      <div className='frame2-content-div show-on-scroll'>
        <h1 className="frame2-text show-on-scroll"> Hello world </h1>
        <img src={image} className="frame2-img show-on-scroll" onLoad={handleShow}/>
      </div>
    </div>
  )
}

export default Frame2;
