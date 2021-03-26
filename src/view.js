export function removeTransparentNavbar() {
  const navbar = document.getElementById("navbar");
  navbar.classList.remove("navbar-top");
}
export function addTransparentNavbar() {
  const navbar = document.getElementById("navbar");
  navbar.classList.add("navbar-top");
}

export function createElement({ elementType, id }) {
  const element = document.createElement(elementType);
  element.id = id;
  return element;
}

export function createImg(imgSrc, alt) {
  const element = document.createElement("img");
  element.src = imgSrc;
  element.alt = "";
  // NOTE, if you want to have some text show up below the image, you can nest the img in a figure element, add a figcaption and return the figure element to be appended to lightbox.
  return element;
}

export function appendElement(elementToAppend, position) {
  position.appendChild(elementToAppend);
}

export const hideLightbox =
  ("click",
  (e) => {
    if (e.target == e.currentTarget) {
      lightbox.classList.remove("active");
      lightbox.removeChild(lightbox.firstChild);
    }
  });

// export function offsetAnchor() {
//   setTimeout(() => {
//     // window.scrollTo(window.scrollX, window.scrollY - 80);
//   });
// }
