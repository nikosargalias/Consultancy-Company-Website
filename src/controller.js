"use strict";

import {
  removeTransparentNavbar,
  addTransparentNavbar,
  createElement,
  appendElement,
  createImg,
  hideLightbox,
} from "./view";

// Transparent navbar when scroll down function
window.onscroll = checkIfScrolled;

function checkIfScrolled() {
  const isScrolledDown = window.pageYOffset > 100;
  if (isScrolledDown) {
    removeTransparentNavbar();
  } else {
    addTransparentNavbar();
  }
}

// Lightbox
(function createAndAppendLightboxElement() {
  const lightboxElement = createElement({ elementType: "div", id: "lightbox" });
  appendElement(lightboxElement, document.body);
})();

const lightbox = document.querySelector("#lightbox");
lightbox.onclick = hideLightbox;

//ask spyros which is the more correct way to get the element.
(function onclickLightboxImages() {
  // const images = document.querySelector("#cases").getElementsByTagName("img");
  // for (const img of images) {
  //   img.onclick = activateLightbox;
  // }
  const images = document
    .querySelectorAll('[lightbox="true"]')
    .forEach((img) => {
      img.onclick = activateLightbox;
    });
})();

function activateLightbox(e) {
  const lightbox = document.querySelector("#lightbox");
  lightbox.classList.add("active");
  const img = createImg(e.target.src);
  appendElement(img, lightbox);
}
