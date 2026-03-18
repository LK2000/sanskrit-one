// Array of images and their captions
let images = [
  {
    src: "../images/vocab/body_animal/antler.jpeg",
    caption: "मृगशृङ्गम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_animal/antler.m4a",
  },
  {
    src: "../images/vocab/body_animal/beak.jpeg",
    caption: "चञ्चुः ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_animal/beak.m4a",
  },
  {
    src: "../images/vocab/body_animal/claw.jpeg",
    caption: "नखः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_animal/claw.m4a",
  },
  {
    src: "../images/vocab/body_animal/comb.jpeg",
    caption: "चूडा ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_animal/comb.m4a",
  },
  {
    src: "../images/vocab/body_animal/crest.jpeg",
    caption: "चूडा ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_animal/crest.m4a",
  },
  {
    src: "../images/vocab/body_animal/fang.jpeg",
    caption: "दंष्ट्रः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_animal/fang.m4a",
  },
  {
    src: "../images/vocab/body_animal/feather.jpeg",
    caption: "पिच्छम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_animal/feather.m4a",
  },
  {
    src: "../images/vocab/body_animal/fin.jpeg",
    caption: "मत्स्यपक्षः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_animal/fin.m4a",
  },
  {
    src: "../images/vocab/body_animal/fur.jpeg",
    caption: "पशुलोमम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_animal/fur.m4a",
  },
  {
    src: "../images/vocab/body_animal/gill.jpeg",
    caption: "मत्स्यश्वासेन्द्रियम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_animal/gill.m4a",
  },
  {
    src: "../images/vocab/body_animal/hoof.jpeg",
    caption: "खुरः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_animal/hoof.m4a",
  },
  {
    src: "../images/vocab/body_animal/horn.jpeg",
    caption: "शृङ्गम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_animal/horn.m4a",
  },
  {
    src: "../images/vocab/body_animal/hump.jpeg",
    caption: "ककुदः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_animal/hump.m4a",
  },
  {
    src: "../images/vocab/body_animal/mane.jpeg",
    caption: "केसरी ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_animal/mane.m4a",
  },
  {
    src: "../images/vocab/body_animal/muzzle.jpeg",
    caption: "मुखबन्धनम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_animal/muzzle.m4a",
  },
  {
    src: "../images/vocab/body_animal/paw.jpeg",
    caption: "पशुपादः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_animal/paw.m4a",
  },
  {
    src: "../images/vocab/body_animal/scale.jpeg",
    caption: "शकलम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_animal/scale.m4a",
  },
  {
    src: "../images/vocab/body_animal/stripe.jpeg",
    caption: "रेखा ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_animal/stripe.m4a",
  },
  {
    src: "../images/vocab/body_animal/tail.jpeg",
    caption: "पुच्छः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_animal/tail.m4a",
  },
  {
    src: "../images/vocab/body_animal/teat.jpeg",
    caption: "वृन्तम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_animal/teat.m4a",
  },
  {
    src: "../images/vocab/body_animal/trunk.jpeg",
    caption: "शुण्डा ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_animal/trunk.m4a",
  },
  {
    src: "../images/vocab/body_animal/tusk.jpeg",
    caption: "दन्तः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_animal/tusk.m4a",
  },
  {
    src: "../images/vocab/body_animal/udder.jpeg",
    caption: "ऊधः ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_animal/udder.m4a",
  },
  {
    src: "../images/vocab/body_animal/whiskers.jpeg",
    caption: "गुम्फः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_animal/whiskers.m4a",
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