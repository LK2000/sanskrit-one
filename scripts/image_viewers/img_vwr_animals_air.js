// Array of images and their captions
let images = [
  {
    src: "../images/vocab/animals_air/bat.jpeg",
    caption: "जतुका ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/animals_air/bat.m4a",
  },
  {
    src: "../images/vocab/animals_air/bee.jpeg",
    caption: "मधुमक्षिका ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/animals_air/bee.m4a",
  },
  {
    src: "../images/vocab/animals_air/bird.jpeg",
    caption: "पक्षी ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_air/bird.m4a",
  },
  {
    src: "../images/vocab/animals_air/bumblebee.jpeg",
    caption: "भ्रमरः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_air/bumblebee.m4a",
  },
  {
    src: "../images/vocab/animals_air/butterfly.jpeg",
    caption: "चित्रपतङ्गः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_air/butterfly.m4a",
  },
  {
    src: "../images/vocab/animals_air/crane.jpeg",
    caption: "बकः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_air/crane.m4a",
  },
  {
    src: "../images/vocab/animals_air/cricket.jpeg",
    caption: "झिल्लीकः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_air/cricket.m4a",
  },
  {
    src: "../images/vocab/animals_air/crow.jpeg",
    caption: "काकः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_air/crow.m4a",
  },
  {
    src: "../images/vocab/animals_air/dove.jpeg",
    caption: "कपोतः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_air/dove.m4a",
  },
  {
    src: "../images/vocab/animals_air/dragonfly.jpeg",
    caption: "व्याधपतङ्गः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_air/dragonfly.m4a",
  },
  {
    src: "../images/vocab/animals_air/eagle.jpeg",
    caption: "गरुडः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_air/eagle.m4a",
  },
  {
    src: "../images/vocab/animals_air/firefly.jpeg",
    caption: "प्रभाकीटः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_air/firefly.m4a",
  },
  {
    src: "../images/vocab/animals_air/flamingo.jpeg",
    caption: "राजहंसः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_air/flamingo.m4a",
  },
  {
    src: "../images/vocab/animals_air/fly.jpeg",
    caption: "मक्षिका ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/animals_air/fly.m4a",
  },
  {
    src: "../images/vocab/animals_air/grasshopper.jpeg",
    caption: "तृणस्कन्दः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_air/grasshopper.m4a",
  },
  {
    src: "../images/vocab/animals_air/mosquito.jpeg",
    caption: "मशकः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_air/mosquito.m4a",
  },
  {
    src: "../images/vocab/animals_air/nightingale.jpeg",
    caption: "प्रियगीतः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_air/nightingale.m4a",
  },
  {
    src: "../images/vocab/animals_air/owl.jpeg",
    caption: "उलूकः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_air/owl.m4a",
  },
  {
    src: "../images/vocab/animals_air/parrot.jpeg",
    caption: "शुकः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_air/parrot.m4a",
  },
  {
    src: "../images/vocab/animals_air/pelican.jpeg",
    caption: "प्लवः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_air/pelican.m4a",
  },
  {
    src: "../images/vocab/animals_air/pigeon.jpeg",
    caption: "कपोतः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_air/pigeon.m4a",
  },
  {
    src: "../images/vocab/animals_air/sparrow.jpeg",
    caption: "चटकः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_air/sparrow.m4a",
  },
  {
    src: "../images/vocab/animals_air/stork.jpeg",
    caption: "सारसः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_air/stork.m4a",
  },
  {
    src: "../images/vocab/animals_air/swan.jpeg",
    caption: "हंसः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_air/swan.m4a",
  },
  {
    src: "../images/vocab/animals_air/vulture.jpeg",
    caption: "गृध्रः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_air/vulture.m4a",
  },
  {
    src: "../images/vocab/animals_air/wasp.jpeg",
    caption: "वरटः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_air/wasp.m4a",
  },
  {
    src: "../images/vocab/animals_air/woodpecker.jpeg",
    caption: "दारुआघाटः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_air/woodpecker.m4a",
  }
];

// Function to shuffle images using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle images array before displaying
shuffleArray(images);

let viewer = document.getElementById("imageViewer");
let viewerImage = document.getElementById("viewerImage");
let viewerCaption = document.getElementById("viewerCaption");
let audioPlayer = new Audio(); // Create an audio object
let currentIndex = 0;

  // Apply Sanskrit font size from localStorage to caption
  const savedFontSize = localStorage.getItem("sanskritFontSize");
  if (savedFontSize) {
    viewerCaption.style.fontSize = savedFontSize;
  }

// Function to load an image based on the index
function loadImage(index) {
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;

  currentIndex = index;

  // Set image source and caption
  viewerImage.src = images[currentIndex].src;
  viewerImage.draggable = false; // Prevent dragging the image
  viewerCaption.textContent = images[currentIndex].caption;

  // Update audio source
  audioPlayer.src = images[currentIndex].audio;
}

// Function to change image when clicking next/previous
function changeImage(step) {
  loadImage(currentIndex + step);
}

// Function to play audio
function playAudio() {
  if (audioPlayer.src) {
    audioPlayer.play();
  }
}

// Function to close the viewer
function closeViewer() {
  viewer.style.display = "none";
  window.close();
}

// Automatically load the first image when the page loads
document.addEventListener("DOMContentLoaded", () => {
  viewer.style.display = "flex"; // Show the viewer on load
  loadImage(0); // Load the first image from the shuffled array
});

/*
 kitchen: pressure cooker, randradarvi, samadarvi, 254, 257, 258
 full kitchen utensil glossary
 nature: waterfall
 measuring tape
 */