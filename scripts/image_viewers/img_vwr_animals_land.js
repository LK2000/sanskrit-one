// Array of images and their captions
let images = [
  {
    src: "../images/vocab/animals_land/ant.jpeg",
    caption: "पिपीलिका ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/animals_land/ant.m4a",
  },
  {
    src: "../images/vocab/animals_land/deer.jpeg",
    caption: "हरिणः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/deer.m4a",
  },
  {
    src: "../images/vocab/animals_land/monkey.jpeg",
    caption: "वानरः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/monkey.m4a",
  },
  {
    src: "../images/vocab/animals_land/bear.jpeg",
    caption: "भल्लूकः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/bear.m4a",
  },
  {
    src: "../images/vocab/animals_land/beetle.jpeg",
    caption: "भृङ्गः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/beetle.m4a",
  },
  {
    src: "../images/vocab/animals_land/bison.jpeg",
    caption: "गवलः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/bison.m4a",
  },
  {
    src: "../images/vocab/animals_land/buffalo.jpeg",
    caption: "महिषः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/buffalo.m4a",
  },
  {
    src: "../images/vocab/animals_land/bull.jpeg",
    caption: "वृषभः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/bull.m4a",
  },
  {
    src: "../images/vocab/animals_land/camel.jpeg",
    caption: "उष्ट्रः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/camel.m4a",
  },
  {
    src: "../images/vocab/animals_land/cat.jpeg",
    caption: "मार्जारः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/cat.m4a",
  },
  {
    src: "../images/vocab/animals_land/caterpillar.jpeg",
    caption: "शूककीटः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/caterpillar.m4a",
  },
  {
    src: "../images/vocab/animals_land/cattle.jpeg",
    caption: "गावः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/cattle.m4a",
  },
  {
    src: "../images/vocab/animals_land/centipede.jpeg",
    caption: "शतपादः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/centipede.m4a",
  },
  {
    src: "../images/vocab/animals_land/chameleon.jpeg",
    caption: "बिम्बः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/chameleon.m4a",
  },
  {
    src: "../images/vocab/animals_land/cheetah.jpeg",
    caption: "चित्रकः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/cheetah.m4a",
  },
  {
    src: "../images/vocab/animals_land/chicken.jpeg",
    caption: "कुक्कुटी ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/animals_land/chicken.m4a",
  },
  {
    src: "../images/vocab/animals_land/cobra.jpeg",
    caption: "नागः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/cobra.m4a",
  },
  {
    src: "../images/vocab/animals_land/cockroach.jpeg",
    caption: "तैलपः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/cockroach.m4a",
  },
  {
    src: "../images/vocab/animals_land/cow.jpeg",
    caption: "धेनु ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/animals_land/cow.m4a",
  },
  {
    src: "../images/vocab/animals_land/dinosaur.jpeg",
    caption: "भीमसरटः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/dinosaur.m4a",
  },
  {
    src: "../images/vocab/animals_land/dog.jpeg",
    caption: "शुनकः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/dog.m4a",
  },
  {
    src: "../images/vocab/animals_land/donkey.jpeg",
    caption: "गर्दभः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/donkey.m4a",
  },
  {
    src: "../images/vocab/animals_land/elephant.jpeg",
    caption: "गजः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/elephant.m4a",
  },
  {
    src: "../images/vocab/animals_land/fox.jpeg",
    caption: "शृगालः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/fox.m4a",
  },
  {
    src: "../images/vocab/animals_land/frog.jpeg",
    caption: "मण्डूकः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/frog.m4a",
  },
  {
    src: "../images/vocab/animals_land/giraffe.jpeg",
    caption: "चित्रोष्ट्रः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/giraffe.m4a",
  },
  {
    src: "../images/vocab/animals_land/goat.jpeg",
    caption: "अजः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/goat.m4a",
  },
  {
    src: "../images/vocab/animals_land/gorilla.jpeg",
    caption: "भीमवानरः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/gorilla.m4a",
  },
  {
    src: "../images/vocab/animals_land/hare.jpeg",
    caption: "शशकः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/hare.m4a",
  },
  {
    src: "../images/vocab/animals_land/hippopotamus.jpeg",
    caption: "जलहस्ती ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/animals_land/hippopotamus.m4a",
  },
  {
    src: "../images/vocab/animals_land/horse.jpeg",
    caption: "अश्वः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/horse.m4a",
  },
  {
    src: "../images/vocab/animals_land/insect.jpeg",
    caption: "कीटः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/insect.m4a",
  },
  {
    src: "../images/vocab/animals_land/kangaroo.jpeg",
    caption: "धाकुरङ्गः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/kangaroo.m4a",
  },
  {
    src: "../images/vocab/animals_land/leopard.jpeg",
    caption: "शार्दूलः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/leopard.m4a",
  },
  {
    src: "../images/vocab/animals_land/lion.jpeg",
    caption: "सिंहः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/lion.m4a",
  },
  {
    src: "../images/vocab/animals_land/lizard.jpeg",
    caption: "अञ्जनः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/lizard.m4a",
  },
  {
    src: "../images/vocab/animals_land/mole.jpeg",
    caption: "गन्धमूषिकः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/mole.m4a",
  },
  {
    src: "../images/vocab/animals_land/mongoose.jpeg",
    caption: "नकुलः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/mongoose.m4a",
  },
  {
    src: "../images/vocab/animals_land/mouse.jpeg",
    caption: "मूषकः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/mouse.m4a",
  },
  {
    src: "../images/vocab/animals_land/ostrich.jpeg",
    caption: "उष्ट्रपक्षी ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/ostrich.m4a",
  },
  {
    src: "../images/vocab/animals_land/peacock.jpeg",
    caption: "मयूरः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/peacock.m4a",
  },
  {
    src: "../images/vocab/animals_land/pig.jpeg",
    caption: "सूकरः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/pig.m4a",
  },
  {
    src: "../images/vocab/animals_land/penguin.jpeg",
    caption: "हिमेरुः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/penguin.m4a",
  },
  {
    src: "../images/vocab/animals_land/porcupine.jpeg",
    caption: "शल्लकी ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/animals_land/porcupine.m4a",
  },
  {
    src: "../images/vocab/animals_land/python.jpeg",
    caption: "अजगरः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/python.m4a",
  },
  {
    src: "../images/vocab/animals_land/rabbit.jpeg",
    caption: "शशः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/rabbit.m4a",
  },
  {
    src: "../images/vocab/animals_land/reindeer.jpeg",
    caption: "महाशृङ्गः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/reindeer.m4a",
  },
  {
    src: "../images/vocab/animals_land/rhinoceros.jpeg",
    caption: "गण्डकः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/rhinoceros.m4a",
  },
  {
    src: "../images/vocab/animals_land/rooster.jpeg",
    caption: "कुक्कुटः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/rooster.m4a",
  },
  {
    src: "../images/vocab/animals_land/scorpion.jpeg",
    caption: "वृश्चिक ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/animals_land/scorpion.m4a",
  },
  {
    src: "../images/vocab/animals_land/sheep.jpeg",
    caption: "मेषः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/sheep.m4a",
  },
  {
    src: "../images/vocab/animals_land/silkworm.jpeg",
    caption: "कोशकारः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/silkworm.m4a",
  },
  {
    src: "../images/vocab/animals_land/snail.jpeg",
    caption: "शम्बूकः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/snail.m4a",
  },
  {
    src: "../images/vocab/animals_land/snake.jpeg",
    caption: "सर्पः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/snake.m4a",
  },
  {
    src: "../images/vocab/animals_land/spider.jpeg",
    caption: "तन्तुनाभः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/spider.m4a",
  },
  {
    src: "../images/vocab/animals_land/squirrel.jpeg",
    caption: "चिक्रोडः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/squirrel.m4a",
  },
  {
    src: "../images/vocab/animals_land/tiger.jpeg",
    caption: "व्याघ्रः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/tiger.m4a",
  },
  {
    src: "../images/vocab/animals_land/worm.jpeg",
    caption: "कृमिः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/worm.m4a",
  },
  {
    src: "../images/vocab/animals_land/zebra.jpeg",
    caption: "चित्ररासभ ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/animals_land/zebra.m4a",
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