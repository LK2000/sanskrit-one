const images = [
  {
    src: "/images/vocab/fruits/basil.jpeg",
    caption: "Basil ● तुलसी ● स्त्रीलिङ्गः",
    audio: "/audio/pic_dict/fruits/basil.m4a",
  },
  {
    src: "/images/vocab/fruits/betel_leaf.jpeg",
    caption: "Betel Leaf ● नागवल्ली ● स्त्रीलिङ्गः",
    audio: "/audio/pic_dict/fruits/betel_leaf.m4a",
  },
  {
    src: "/images/vocab/fruits/beetroot.jpeg",
    caption: "Beetroot ● पालङगः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/fruits/beetroot.m4a",
  },
  {
    src: "/images/vocab/fruits/bitter_gourd.jpeg",
    caption: "Bitter Gourd ● कारवेल्लम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/bitter_gourd.m4a",
  },
  {
    src: "/images/vocab/fruits/broccoli.jpeg",
    caption: "Broccoli ● हरितपुष्पशाकम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/broccoli.m4a",
  },
  {
    src: "/images/vocab/fruits/cabbage.jpeg",
    caption: "Cabbage ● हरितम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/cabbage.m4a",
  },
  {
    src: "/images/vocab/fruits/carrot.jpeg",
    caption: "Carrot ● गृञ्जनकम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/carrot.m4a",
  },
  {
    src: "/images/vocab/fruits/cauliflower.jpeg",
    caption: "Cauliflower ● पुष्पशाकम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/cauliflower.m4a",
  },
  {
    src: "/images/vocab/fruits/chickpea.jpeg",
    caption: "Chickpea ● चणकः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/fruits/chickpea.m4a",
  },
  {
    src: "/images/vocab/fruits/coriander_leaves.jpeg",
    caption: "Coriander Leaves ● कुस्तुंबरी ● स्त्रीलिङ्गः",
    audio: "/audio/pic_dict/fruits/coriander_leaves.m4a",
  },
  {
    src: "/images/vocab/fruits/coriander_seeds.jpeg",
    caption: "Coriander Seeds ● धान्यकम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/coriander_seeds.m4a",
  },
  {
    src: "/images/vocab/fruits/corn.jpeg",
    caption: "Corn ● लवेटिका ● स्त्रीलिङ्गः",
    audio: "/audio/pic_dict/fruits/corn.m4a",
  },
  {
    src: "/images/vocab/fruits/cow_peas.jpeg",
    caption: "Cow Peas ● निष्पावः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/fruits/cow_peas.m4a",
  },
  {
    src: "/images/vocab/fruits/curry_leaves.jpeg",
    caption: "Curry Leaves ● कृष्णनिम्बम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/curry_leaves.m4a",
  },
  {
    src: "/images/vocab/fruits/dried_ginger.jpeg",
    caption: "Dried Ginger ● शुण्ठी ● स्त्रीलिङ्गः",
    audio: "/audio/pic_dict/fruits/dried_ginger.m4a",
  },
  {
    src: "/images/vocab/fruits/drumstick.jpeg",
    caption: "Drumstick ● शिग्रुः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/fruits/drumstick.m4a",
  },
  {
    src: "/images/vocab/fruits/eggplant_(brinjal).jpeg",
    caption: "Eggplant (Brinjal) ● वृन्ताकम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/eggplant_(brinjal).m4a",
  },
  {
    src: "/images/vocab/fruits/garlic.jpeg",
    caption: "Garlic ● लशुनम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/garlic.m4a",
  },
  {
    src: "/images/vocab/fruits/green_peas.jpeg",
    caption: "Green Peas ● वर्तुलकम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/green_peas.m4a",
  },
  {
    src: "/images/vocab/fruits/ginger.jpeg",
    caption: "Ginger ● आर्द्रकम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/ginger.m4a",
  },
  {
    src: "/images/vocab/fruits/herbs.jpeg",
    caption: "Herbs ● ओषधयः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/fruits/herbs.m4a",
  },
  {
    src: "/images/vocab/fruits/lentils.jpeg",
    caption: "Lentils ● मसूरः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/fruits/lentils.m4a",
  },
  {
    src: "/images/vocab/fruits/lettuce.jpeg",
    caption: "Lettuce ● हरितकम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/lettuce.m4a",
  },
  {
    src: "/images/vocab/fruits/mint.jpeg",
    caption: "Mint ● पुदिना ● स्त्रीलिङ्गः",
    audio: "/audio/pic_dict/fruits/mint.m4a",
  },
  {
    src: "/images/vocab/fruits/mushroom.jpeg",
    caption: "Mushroom ● छत्राकम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/mushroom.m4a",
  },
  {
    src: "/images/vocab/fruits/ladies_finger,_okra.jpeg",
    caption: "Ladies Finger, Okra ● भिण्डिः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/fruits/ladies_finger,_okra.m4a",
  },
  {
    src: "/images/vocab/fruits/olive.jpeg",
    caption: "Olive ● जितवृक्षः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/fruits/olive.m4a",
  },
  {
    src: "/images/vocab/fruits/onion.jpeg",
    caption: "Onion ● पलाण्डु ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/fruits/onion.m4a",
  },
  {
    src: "/images/vocab/fruits/potato.jpeg",
    caption: "Potato ● आलुकम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/potato.m4a",
  },
  {
    src: "/images/vocab/fruits/pumpkin,_ash_gourd.jpeg",
    caption: "Pumpkin, Ash Gourd ● कुष्माण्डम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/pumpkin,_ash_gourd.m4a",
  },
  {
    src: "/images/vocab/fruits/radish.jpeg",
    caption: "Radish ● मूलकम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/radish.m4a",
  },
  {
    src: "/images/vocab/fruits/ridge_gourd.jpeg",
    caption: "Ridge Gourd ● कोशातकी ● स्त्रीलिङ्गः",
    audio: "/audio/pic_dict/fruits/ridge_gourd.m4a",
  },
  {
    src: "/images/vocab/fruits/salad.jpeg",
    caption: "Salad ● शदः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/fruits/salad.m4a",
  },
  {
    src: "/images/vocab/fruits/snake_gourd.jpeg",
    caption: "Snake Gourd ● पटोलः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/fruits/snake_gourd.m4a",
  },
  {
    src: "/images/vocab/fruits/spinach.jpeg",
    caption: "Spinach ● पालक्या ● स्त्रीलिङ्गः",
    audio: "/audio/pic_dict/fruits/spinach.m4a",
  },
  {
    src: "/images/vocab/fruits/sprouts.jpeg",
    caption: "Sprouts ● अङ्कुरः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/fruits/sprouts.m4a",
  },
  {
    src: "/images/vocab/fruits/sweet_potato.jpeg",
    caption: "Sweet Potato ● मिष्टालुकम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/sweet_potato.m4a",
  },
  {
    src: "/images/vocab/fruits/tapioca.jpeg",
    caption: "Tapioca ● तरुखण्डः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/fruits/tapioca.m4a",
  },
  {
    src: "/images/vocab/fruits/tomato.jpeg",
    caption: "Tomato ● रक्तफलम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/tomato.m4a",
  },
  {
    src: "/images/vocab/fruits/turnip_(गृ..).jpeg",
    caption: "Turnip (गृ..) ● गृञ्जनः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/fruits/turnip_(गृ..).m4a",
  },
  {
    src: "/images/vocab/fruits/turnip_(श्वे..).jpeg",
    caption: "Turnip (श्वे..) ● श्वेतकन्दः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/fruits/turnip_(श्वे..).m4a",
  },
  {
    src: "/images/vocab/fruits/vegetable.jpeg",
    caption: "Vegetable ● शाकः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/fruits/vegetable.m4a",
  },
  {
    src: "/images/vocab/fruits/yam.jpeg",
    caption: "Yam ● सूरणम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/yam.m4a",
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
