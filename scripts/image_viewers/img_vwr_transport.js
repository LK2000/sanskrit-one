// Array of images and their captions
let images = [
  {
    src: "../images/vocab/transport/airplane.png",
    caption: "विमानम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/transport/airplane.m4a",
  },
  {
    src: "../images/vocab/transport/bus.png",
    caption: "लोकयानम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/transport/bus.m4a",
  },
  {
    src: "../images/vocab/transport/train.png",
    caption: "रेलयानम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/transport/train.m4a",
  },
  {
    src: "../images/vocab/transport/car.png",
    caption: "कारयानम्‌ ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/transport/car.m4a",
  },
  {
    src: "../images/vocab/transport/bicycle.png",
    caption: "द्विचक्रिका ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/transport/bicycle.m4a",
  },
  {
    src: "../images/vocab/transport/three_wheeler.png",
    caption: "त्रिचक्रिका ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/transport/three_wheeler.m4a",
  },
  {
    src: "../images/vocab/transport/horse_cart.png",
    caption: "अश्वशकटम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/transport/horse_cart.m4a",
  },
  {
    src: "../images/vocab/transport/bullock_cart.png",
    caption: "वृषभशकटम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/transport/bullock_cart.m4a",
  },
  {
    src: "../images/vocab/transport/boat.png",
    caption: "नौका ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/transport/boat.m4a",
  },
  {
    src: "../images/vocab/transport/rocket.png",
    caption: "अन्तरिक्षयानम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/transport/rocket.m4a",
  },
  {
    src: "../images/vocab/transport/motorcycle.png",
    caption: "द्विचक्रयन्त्रयानम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/transport/motorcycle.m4a",
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
