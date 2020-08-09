import React from 'react';
import './Frame2.css';

var image = process.env.PUBLIC_URL + '/frame2/camera_lens.jpg';
var scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow;

var isImageVisible = false;
var offset = undefined;

var b2p_R_start = 0;
var b2p_R_end = 178;
var p2r_R_end = 237;

var b2p_G_start = 222;
var b2p_G_end = 141;
var p2r_G_end = 104;

var b2p_B_start = 247;
var b2p_B_end = 199;
var p2r_B_end = 39;

window.onscroll =
function () {
  scrollRotate();
};

function scrollRotate() {

  var images = document.getElementsByClassName("frame2-img");

  for (var i = 0; i < images.length; i++) {
    let image = images.item(i);

    if (image.classList.value.includes("is-visible")) {
      isImageVisible = true;

      if (offset === undefined && isImageVisible === true){
        if (window.pageYOffset < 1350) {
          offset = window.pageYOffset;
        }
        else {
          offset = 1350;
        }
      }

    }
    else {
      isImageVisible = false;
    }

    if (isImageVisible === true) {

      var lensDiv = document.getElementsByClassName("frame2-lens-div").item(0);
      var rect = lensDiv.getBoundingClientRect();

      var divDiv = document.getElementsByClassName("frame2-div").item(0);
      var rect2 = divDiv.getBoundingClientRect();

      var textDiv = document.getElementsByClassName("frame2-text-div").item(0);

      var startHeight = offset+(0.25*rect2.height);
      var halfHeight = offset+(0.6*rect2.height);
      var endHeight = offset+(0.95*rect2.height);
      var rangedHeight = 0.35 * rect2.height;

      var b2p_R_grad = rangedHeight / (b2p_R_end - b2p_R_start);
      var p2r_R_grad = rangedHeight / (p2r_R_end - b2p_R_end);
      var b2p_G_grad = rangedHeight / (b2p_G_end - b2p_G_start);
      var p2r_G_grad = rangedHeight / (p2r_G_end - b2p_G_end);
      var b2p_B_grad = rangedHeight / (b2p_B_end - b2p_B_start);
      var p2r_B_grad = rangedHeight / (p2r_B_end - b2p_B_end);

      var b2p_R_inter = startHeight - (b2p_R_start * b2p_R_grad);
      var b2p_G_inter = startHeight - (b2p_G_start * b2p_G_grad);
      var b2p_B_inter = startHeight - (b2p_B_start * b2p_B_grad);
      var p2r_R_inter = halfHeight - (b2p_R_end * p2r_R_grad);
      var p2r_G_inter = halfHeight - (b2p_G_end * p2r_G_grad);
      var p2r_B_inter = halfHeight - (b2p_B_end * p2r_B_grad);

      if (window.pageYOffset >= startHeight && window.pageYOffset <= halfHeight) {
        var red = ((window.pageYOffset - b2p_R_inter) / b2p_R_grad);
        var green = ((window.pageYOffset - b2p_G_inter) / b2p_G_grad);
        var blue = ((window.pageYOffset - b2p_B_inter) / b2p_B_grad);
      }
      else if (window.pageYOffset >= halfHeight && window.pageYOffset <= endHeight) {
        var red = ((window.pageYOffset - p2r_R_inter) / p2r_R_grad);
        var green = ((window.pageYOffset - p2r_G_inter) / p2r_G_grad);
        var blue = ((window.pageYOffset - p2r_B_inter) / p2r_B_grad);
      }

      divDiv.style["backgroundColor"] = `rgb(${red}, ${green}, ${blue})`
      lensDiv.style["transform"] = `rotate(${(window.pageYOffset)/(109/6)}deg)`;
      lensDiv.style["opacity"] = `${Math.sin((window.pageYOffset-offset)/(rect.height/Math.PI))}`;
      textDiv.style["opacity"] = `${Math.sin((window.pageYOffset-offset)/(rect.height/Math.PI))}`;
    }
  }
}

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
    <div className='frame2-div show-on-scroll' onLoad={handleShow}>
      <div className='frame2-text-div show-on-scroll'>
        <p className='frame2-text top show-on-scroll'>Oh, the evening sky</p>
        <h1 className='frame2-h2 show-on-scroll'>The magnificent colours</h1>
        <p className='frame2-text bottom show-on-scroll'>Freed by the twilight</p>
      </div>
      <div className='frame2-lens-div show-on-scroll'>
          <div className="frame2-img-div first show-on-scroll">
            <div className="frame2-img first show-on-scroll" />
          </div>
        <div className="frame2-img-div second show-on-scroll">
          <div className="frame2-img second show-on-scroll" />
        </div>
        <div className="frame2-img-div third show-on-scroll">
          <div className="frame2-img third show-on-scroll" />
        </div>
      </div>
    </div>
  )
}

export default Frame2;
