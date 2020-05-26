// declare your content in a code-friendly way
const slideDataByIndex = [
  {
    title: "Use the left and right arrow keys to navigate the project. Make sure your computer audio is on. To replay a sound, click the speaker icon in the bottom left corner.",
    description: "",
    text: "",
    position: {
      vertical: "center",
      horizontal: "center"
    }
  },
  {
    title: "Minor Second",
    description: "angst in the context of finality",
    text: "This interval is very close to a resolved unison, but its displacement by a single tone creates a dreadful sense of tension. The Questura in Viterbo captures this tension, as it was the first place ini which I sensed the true inevitability of leaving Italy. The sight and moment taught me the benefits of accepting the unavoidable, even when those around me choose to deny it.",
    position: {
      vertical: "top",
      horizontal: "left"
    }
  },
  {
    title: "Minor Third",
    description: "resolved sadness",
    text: "The minor third is an interval which communicates sadness to the listener, but with a feeling of closure upon arrival. The place best corresponds to this sensation given this year's circumstances is my own bedroom in Charlotte, North Carolina. Upon returning to my house and to this room, my year abroad seemed in many ways as iif it had been a dream, and this distance from reality created in me both a sense of resolution and sorrow.",
    position: {
      vertical: "bottom",
      horizontal: "center"
    }
  },
  {
    title: "Major Third",
    description: "fulfilling brightness",
    text: "The major third offers its listeners a comforting radiance of light that is often interpreted as a symbol of carefree pleasure. C'era Una Volta is a location that matches this description, being the first place where I felt genuinely at ease in Viterbo. When eating dinner with my soon-to-be SYA peers here on our first evening in Italy, I let go of my initial judgments and made the effort to connect with my fellow students, a decision that taught me the importance of setting first impressions aside when assessing my surroundings.",
    position: {
      vertical: "top",
      horizontal: "left"
    }
  },
  {
    title: "Perfect Fourth",
    description: "ambitious drive",
    text: "",
    position: {
      vertical: "top",
      horizontal: "right"
    }
  },
  {
    title: "Tritone",
    description: "instability and peril",
    text: "",
    position: {
      vertical: "bottom",
      horizontal: "center"
    }
  },
  {
    title: "Perfect Fifth",
    description: "stable satisfaction",
    text: "",
    position: {
      vertical: "bottom",
      horizontal: "left"
    }
  },
  {
    title: "Minor Sixth",
    description: "angst in the context of transition",
    text: "",
    position: {
      vertical: "top",
      horizontal: "left"
    }
  },
  {
    title: "Major Sixth",
    description: "unsatiated curiosity",
    text: "",
    position: {
      vertical: "top",
      horizontal: "right"
    }
  },
  {
    title: "Minor Seventh",
    description: "disorientation and helplessness",
    text: "",
    position: {
      vertical: "bottom",
      horizontal: "left"
    }
  },
  {
    title: "Major Seventh",
    description: "determined aspiration",
    text: "",
    position: {
      vertical: "top",
      horizontal: "right"
    }
  },
  {
    title: "Octave",
    description: "familiarity and lightheartedness",
    text: "",
    position: {
      vertical: "top",
      horizontal: "right"
    }
  },
];

// then build a reference list of all the HTML we want to interact with
const slideShowEl = document.getElementById("slide-show");
const contentContainerEl = document.getElementById("slide-show__content-container");
const slideTitleEl = document.getElementById("slide-show__title");
const slideDescriptionEl = document.getElementById("slide-show__description");
const slideTextEl = document.getElementById("slide-show__text");
const slideAudioEl = document.getElementById("slide-show__audio");

// counting in JS begins with 0, instead of 1
const firstSlideIndex = 0;
let currentSlideIndex = firstSlideIndex;

// When someone presses down on a keyboard button, change slideDataByIndex
window.addEventListener("keydown", handleChangeSlide);

function handleChangeSlide(event) {
  if (event.key === "ArrowRight") {
    goToSlide(currentSlideIndex + 1);
  } else if (event.key === "ArrowLeft") {
    goToSlide(currentSlideIndex - 1);
  } else {
    // do nothing
  }
}

function goToSlide(index) {
  if (isIndexWithinBounds(index)) {
    currentSlideIndex = index;
    const slide = slideDataByIndex[index];

    setText(slide.title, slide.description, slide.text);
    positionText(slide.position);
    setImage(slide.image);
    playAudio(slide.audio);
  } else {
    // do nothing
  }
}

function isIndexWithinBounds(index) {
  const isNotNegative = index >= 0;
  const hasCorrespondingSlide = index < slideDataByIndex.length;
  return isNotNegative && hasCorrespondingSlide;
}

function setText(chord, description, text) {
  // HTML Elements contain a lot of info
  // But they hold their contents on the innerText property
  slideTitleEl.innerText = chord;
  slideDescriptionEl.innerText = description ? "(" + description + ")" :  "";
  slideTextEl.innerText = text;
}

const textBoxHeight = 194; // height + padding*2 + border*2
const textBoxWidth = 614; // width + padding*2 + border*2
const buttonWidth = 92;
function positionText({vertical, horizontal}) {
  const mustAvoidButton = vertical === "bottom" && horizontal === "left";
  contentContainerEl.style.top = convertPosition(vertical, textBoxHeight);
  contentContainerEl.style.left = mustAvoidButton
    ? `${buttonWidth}px`
    : convertPosition(horizontal, textBoxWidth);
}

const marginToEdge = 5;
function convertPosition(position, differential, avoidButton) {
  if (position === "top" || position === "left") {
    return `${marginToEdge}px`;
  } else if (position === "bottom" || position === "right") {
    return `calc(100% - ${differential + marginToEdge}px)`;
  } else if (position === "center") {
    return `calc(50% - ${differential / 2}px)`;
  }
}

function setImage(url) {
  if (!url) return;

  slideShowEl.style.backgroundImage = `url(${url})`;
}

function playAudio(url) {
  if (!url) return;
}

goToSlide(0);
