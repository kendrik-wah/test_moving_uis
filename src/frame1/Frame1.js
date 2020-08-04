import React from 'react';
import './frame1.css';

var scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow;

function loop() {

  Array.prototype.forEach.call(elementsToShow, function(element){
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    }
    else {
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

export class Frame1 extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    handleShow();
  }

  render() {
    return (
      <div className='frame1-div show-on-scroll'>
        <div className='frame1-title-div show-on-scroll'>
          <h1 className="frame1-title show-on-scroll">Purpose</h1>
          <p className="frame1-moretext show-on-scroll">What is the first thing in your mind when you wake up every morning?
                                                        What motivates you to move forward, despite everything the world throws at you?
                                                        What is it exactly that drives and propels you, that it is your fuel, your fire, your passion and the fervour within you?</p>
          <p className="frame1-moretext show-on-scroll">A rush of adrenaline. A surge of warmth courses through your body, a tingle, a shock that hums and strums within you.
                                                        The electrifying and exhilarating sensation lingers in your mind.
                                                        Your first venture into no man's land, you seemed worried, apprehensive, afraid of what might be in front of you.
                                                        The feeling of uncertainty drowns you with doubt and insecurity, that there is something out there you are unprepared for.
                                                        You may be afraid of the unknown, but your first encounter has shown that deep down, there might be something about the unknown that excites you.</p>
        </div>

      </div>
    )
  }
}

export default Frame1;
