// Array of images and their captions
let images = [
  {
    src: "../images/vocab/animals_water/beaver.jpeg",
    caption: "सेतूद्रः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_water/beaver.m4a",
  },
  {
    src: "../images/vocab/animals_water/coral.jpeg",
    caption: "प्रवालः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_water/coral.m4a",
  },
  {
    src: "../images/vocab/animals_water/crab.jpeg",
    caption: "कर्कटः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_water/crab.m4a",
  },
  {
    src: "../images/vocab/animals_water/crocodile.jpeg",
    caption: "मकरः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_water/crocodile.m4a",
  },
  {
    src: "../images/vocab/animals_water/dolphin.jpeg",
    caption: "शिशुमारः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_water/dolphin.m4a",
  },
  {
    src: "../images/vocab/animals_water/duck.jpeg",
    caption: "कादम्बः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_water/duck.m4a",
  },
  {
    src: "../images/vocab/animals_water/eel.jpeg",
    caption: "जलव्यालः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_water/eel.m4a",
  },
  {
    src: "../images/vocab/animals_water/fish.jpeg",
    caption: "मत्स्यः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_water/fish.m4a",
  },
  {
    src: "../images/vocab/animals_water/goldfish.jpeg",
    caption: "स्वर्णमीनः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_water/goldfish.m4a",
  },
  {
    src: "../images/vocab/animals_water/jellyfish.jpeg",
    caption: "छत्रिकः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_water/jellyfish.m4a",
  },
  {
    src: "../images/vocab/animals_water/lobster.jpeg",
    caption: "अभिचिङ्गटः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_water/lobster.m4a",
  },
  {
    src: "../images/vocab/animals_water/octopus.jpeg",
    caption: "अष्टभुजः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_water/octopus.m4a",
  },
  {
    src: "../images/vocab/animals_water/otter.jpeg",
    caption: "जलनकुलः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_water/otter.m4a",
  },
  {
    src: "../images/vocab/animals_water/oyster.jpeg",
    caption: "शुक्तिः ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/animals_water/oyster.m4a",
  },
  {
    src: "../images/vocab/animals_water/shrimp.jpeg",
    caption: "इञ्चाकः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_water/shrimp.m4a",
  },
  {
    src: "../images/vocab/animals_water/tadpole.jpeg",
    caption: "मण्डूकशावकः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_water/tadpole.m4a",
  },
  {
    src: "../images/vocab/animals_water/tortoise.jpeg",
    caption: "कूर्मः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_water/tortoise.m4a",
  },
  {
    src: "../images/vocab/animals_water/walrus.jpeg",
    caption: "दंष्ट्रालः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_water/walrus.m4a",
  },
  {
    src: "../images/vocab/animals_water/whale.jpeg",
    caption: "तिमिः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_water/whale.m4a",
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

/* prevent users from copying text and images */
document.addEventListener("contextmenu", (event) => event.preventDefault());
