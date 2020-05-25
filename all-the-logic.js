

console.log("Welcome to the console, Nate!");

const slideShowContainer = document.getElementById("slideshow");
const textContainer = document.getElementById("text");

function setText(text) {
  textContainer.innerText = text;
}

function setImage(url) {
  slideShowContainer.style.backgroundImage = `url(${url})`;
}

function playAudio() {
}

setText("hello!");
