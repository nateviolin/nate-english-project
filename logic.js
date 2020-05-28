// declare your content in a code-friendly way
const slideDataByIndex = [
  {
    title: "Use the left and right arrow keys to navigate the project. Make sure your computer audio is on. To replay a sound, click the speaker icon in the bottom left corner.",
    description: "",
    text: "",
    position: {
      vertical: "center",
      horizontal: "center"
    },
    image: "assets/images/0_start.png",
  },
  {
    title: "Minor Second",
    description: "angst in the context of finality",
    text: "This interval is very close to a resolved unison, but its displacement by a single tone creates a dreadful sense of tension. The Questura in Viterbo captures this tension, as it was the first place ini which I sensed the true inevitability of leaving Italy. The sight and moment taught me the benefits of accepting the unavoidable, even when those around me choose to deny it.",
    position: {
      vertical: "top",
      horizontal: "left"
    },
    audio: "assets/audio/1_minor_second_c.mp3",
    image: "assets/images/1_questura.png",
  },
  {
    title: "Major Second",
    description: "pleasurable sadness",
    text: "The major second has a similar proximity to home as the previous interval but with a lesser degree of intensity. Thus, it invokes a feeling of pleasurable longing, similar to the emotions felt during SYA's final meeting in Valle Faul. This experience of reminiscing as my time in Italy came to a close made me assign a greater value to living in the present while keeping in mind the future. By doing this, one can ensure that the memories which their current actions generate will one day be associated not with regret but with appreciation for various lessons learned and connections formed.",
    position: {
      vertical: "bottom",
      horizontal: "center"
    },
    audio: "assets/audio/2_major_second_c.mp3",
    image: "assets/images/2_valle_faul.png",
  },
  {
    title: "Minor Third",
    description: "resolved sadness",
    text: "The minor third is an interval which communicates sadness to the listener, but with a feeling of closure upon arrival. The place best corresponds to this sensation given this year's circumstances is my own bedroom in Charlotte, North Carolina. Upon returning to my house and to this room, my year abroad seemed in many ways as iif it had been a dream, and this distance from reality created in me both a sense of resolution and sorrow.",
    position: {
      vertical: "bottom",
      horizontal: "center"
    },
    audio: "assets/audio/3_minor_third_c.mp3",
    image: "assets/images/3_bedroom.png",

  },
  {
    title: "Major Third",
    description: "fulfilling brightness",
    text: "The major third offers its listeners a comforting radiance of light that is often interpreted as a symbol of carefree pleasure. C'era Una Volta is a location that matches this description, being the first place where I felt genuinely at ease in Viterbo. When eating dinner with my soon-to-be SYA peers here on our first evening in Italy, I let go of my initial judgments and made the effort to connect with my fellow students, a decision that taught me the importance of setting first impressions aside when assessing my surroundings.",
    position: {
      vertical: "top",
      horizontal: "left"
    },
    audio: "assets/audio/4_major_third_c.mp3",
    image: "assets/images/4_cera_una_volta.png",

  },
  {
    title: "Perfect Fourth",
    description: "ambitious drive",
    text: "This interval, while described by some as neutral, to me contains an energetic and active momentum. This rush ofo ambitiously driving forward is similar to the feeling of embarking on an unpredictable adventure, aware that it will in some way change the way I see the world but ignorant as to the form in which that change will take effect. For this reason, I chose the Porta Romana train station to represent the perfect fourth.",
    position: {
      vertical: "top",
      horizontal: "right"
    },
    audio: "assets/audio/5_perfect_fourth_c.mp3",
    image: "assets/images/5_porta_romana.png",

  },
  {
    title: "Tritone",
    description: "instability and peril",
    text: "The tritone is one of the most tense and unstable intervals, and for this reason it is most commonly associated with danger or uncertainty. This skatepark in Viterbo is a place where I overcame a variety of alarming situations in my interactions with local Italians, and one which forced me to grow by utilizing my cultural competencies iin a real-world application.",
    position: {
      vertical: "bottom",
      horizontal: "center"
    },
    audio: "assets/audio/6_tritone_c.mp3",
    image: "assets/images/6_skatepark.png",

  },
  {
    title: "Perfect Fifth",
    description: "stable satisfaction",
    text: "The perfect fifth is the most soundly supported musical interval and therefore roots the listener in a s tate of certainty. This dependability can also be found in my relationship to L'Antica Latteria. Aside from teh unwavering quality of their creamy snack, this location was consistent in its ability to strengthen bonds between American and Italian students. Through this common delight, I created stable and lasting connections with individuals whose company brightened my overall experience abroad.",
    position: {
      vertical: "bottom",
      horizontal: "center"
    },
    audio: "assets/audio/7_perfect_fifth_c.mp3",
    image: "assets/images/7_lantica_latteria.png",

  },
  {
    title: "Minor Sixth",
    description: "angst in the context of transition",
    text: "The minor sixth is an interval with the desire to resolve down not entirely to the resolving note of the scale, but rather to the perfect fifth that rests just beneath it. The gardens in which we first met our host families fulfill a similar role in that we, as incoming SYA students, were seeking comfort in a culture different than the one from which we had departed. This process has transformed me as an individual in my ability to react to change on a smaller, everyday scale.",
    position: {
      vertical: "top",
      horizontal: "left"
    },
    audio: "assets/audio/8_minor_sixth_c.mp3",
    image: "assets/images/8_garden.png",

  },
  {
    title: "Major Sixth",
    description: "unsatiated curiosity",
    text: "The major sixth is not a particularly tense interval, however it feels as though it is posing a question whose answer lies within the perfect fifth. The SYA Italy campus is an establishment in which I partook in similar behavior, constantly questioning and aiming to better understand the foreign culture which surrounded me. Through such inquiry, the answers I found, like the perfect fifth, offered stability but were never complete and instead perpetuated a cycle of exploration and discovery.",
    position: {
      vertical: "top",
      horizontal: "right"
    },
    audio: "assets/audio/9_major_sixth_c.mp3",
    image: "assets/images/9_sya_campus.png",

  },
  {
    title: "Minor Seventh",
    description: "disorientation and helplessness",
    text: "The minor seventh often creates a feeling of being lost, as it is neither near enough to the perfect fifth to fall back on it nor tense enough to resolve upwards to an octave. This sense of confusion is comparable to that of my first day walking home alone from SYA, when I completely lost my bearings while standing in Piazza delle Erbe, forcing me to use Viterbese locals as my sole resource for navigating the town. Because of this incident, I gained confidence in my language abilities early on in the year and continued to thrive in situations that would have otherwise presented a language barrier.",
    position: {
      vertical: "bottom",
      horizontal: "centerr"
    },
    audio: "assets/audio/10_minor_seventh_c.mp3",
    image: "assets/images/10_piazza_delle_erbe.png",

  },
  {
    title: "Major Seventh",
    description: "determined aspiration",
    text: "The major seventh arguably contains a stronger tension than any other interval in the chromatic scale, and its proximity to the octave gives it the sense of striving to attain a goal. Piazza San Lorenzo was my primary mental image of Viterbo before arriving in Italy, and thus it is symbolic of how my determination in applying to SYA allowed me to turn my objectives into reality",
    position: {
      vertical: "top",
      horizontal: "right"
    },
    audio: "assets/audio/11_major_seventh_c.mp3",
    image: "assets/images/11_piazza_san_lorenzo.png",

  },
  {
    title: "Octave",
    description: "familiarity and lightheartedness",
    text: "The octave is the interval at which a harmony is most resolved. Because both tones correspond to the same note, there is a complete absence of tension or disagreement. Being the place that I called home for six months of my life, my host family's apartment perfectly represents this sense of concord. Despite any emotional or academic burdens that I might have been carrying at a given time, the kitchen of this apartment was somewhere into which these worries rarely entered, teaching me a lesson about human connection and its power to relieve stress.",
    position: {
      vertical: "top",
      horizontal: "right"
    },
    audio: "assets/audio/12_octave_c.mp3",
    image: "assets/images/12_kitchen.png",
  },
];

// then build a reference list of all the HTML we want to interact with
const slideShowEl = document.getElementById("slide-show");
const contentContainerEl = document.getElementById("slide-show__content-container");
const slideTitleEl = document.getElementById("slide-show__title");
const slideDescriptionEl = document.getElementById("slide-show__description");
const slideTextEl = document.getElementById("slide-show__text");
const playAgainButtonEl = document.getElementById("slide-show__play-again-button");

// counting in JS begins with 0, instead of 1
const firstSlideIndex = 0;
let currentSlideIndex = firstSlideIndex;

// When someone presses down on a keyboard button, change slideDataByIndex
window.addEventListener("keydown", handleChangeSlide);

function handleChangeSlide(event) {
  // a triple-equals is an equator: is left the same as right?
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
    // a single-equals is an assigner: make left the same as right
    currentSlideIndex = index;
    const slide = slideDataByIndex[index];

    setText(slide.title, slide.description, slide.text);
    positionText(slide.position);
    setImage(slide.image);
    playAudio(index);
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

  // Below is a ternary op: if this is truthy, do that, else do the other thing
  // The first slide has no description, so we need to do this check
  slideDescriptionEl.innerText = description ? `(${description})` :  "";
  slideTextEl.innerText = text;
}

// All our text is positioned in different places.
const textBoxHeight = 218; // height + padding*2 + border*2
const textBoxWidth = 618; // width + padding*2 + border*2
function positionText({vertical, horizontal}) {
  contentContainerEl.style.top = convertPosition(vertical, textBoxHeight);
  contentContainerEl.style.left = convertPosition(horizontal, textBoxWidth);
}

// Each entry tells us where to set it
// It's easiest to position always from the top and left
// but that means we need to do some differential work to support things like
// center or bottom placement.
const marginToEdge = 10;
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
  // simple if-statements like this look for "truthiness"
  // is this thing "present," e.g. a non-zero integer, or a non-empty string
  // of text, or a true boolean value
  if (url) {
    // background images need a little decoration to be understood
    slideShowEl.style.backgroundImage = `url(${url})`;
  } else {
    // do nothing
  }
}

// Here we can make a collection of audio samples
// As we play them, we can store them here for easy replay
const loadedAudioSamples = [];
// The recordings I found play each note individually first
// so we'll fast forward b y 2.45 seconds to just play the chord
const audioChordTime = 2.45;

function stopAndResetAllAudio() {
  loadedAudioSamples.forEach(sample => {
    sample.pause();
    sample.currentTime = audioChordTime;
  });
}

function buildAudioSample(audioUrl) {
  const audioSample = document.createElement("audio");
  audioSample.src = audioUrl;
  audioSample.currentTime = audioChordTime;

  return audioSample;
}

function playAudio(index) {
  stopAndResetAllAudio();

  const audioUrl = slideDataByIndex[index].audio;
  if (!audioUrl) {
    return; // do nothing;
  }

  if (!loadedAudioSamples[index]) {
    loadedAudioSamples[index] = buildAudioSample(audioUrl);
  }

  loadedAudioSamples[index].play();
}

function handlePressPlay(event) {
  playAudio(currentSlideIndex);
}

playAgainButtonEl.addEventListener("click", handlePressPlay);

// at the start of everything, go to slide 0 (intro)
goToSlide(0);
