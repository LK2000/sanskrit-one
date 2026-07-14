const images = [
  {
    src: "/images/vocab/fruits/apricot.jpeg",
    caption: "Apricot ● प्रियालुः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/fruits/apricot.m4a",
  },
  {
    src: "/images/vocab/fruits/almond.jpeg",
    caption: "बादामः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/fruits/almond_m.m4a",
  },
  {
    src: "/images/vocab/fruits/almond.jpeg",
    caption: "वातामम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/almond_n.m4a",
  },
  {
    src: "/images/vocab/fruits/apple.jpeg",
    caption: "स्वादुफलम्, सेवफलम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/apple.m4a",
  },
  {
    src: "/images/vocab/fruits/banana.jpeg",
    caption: "कदलीफलम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/banana.m4a",
  },
  {
    src: "/images/vocab/fruits/bell_pepper.jpeg",
    caption: "महामरीचिका ● स्त्रीलिङ्गः",
    audio: "/audio/pic_dict/fruits/bell_pepper.m4a",
  },
  {
    src: "/images/vocab/fruits/cantaloupe.jpeg",
    caption: "वृत्तकर्कटी ● स्त्रीलिङ्गः",
    audio: "/audio/pic_dict/fruits/cantaloupe.m4a",
  },
  {
    src: "/images/vocab/fruits/cashew.jpeg",
    caption: "काजूतकम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/cashew.m4a",
  },
  {
    src: "/images/vocab/fruits/cherry.jpeg",
    caption: "प्रबदरम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/cherry.m4a",
  },
  {
    src: "/images/vocab/fruits/chilli.jpeg",
    caption: "मारीचिका ● स्त्रीलिङ्गः",
    audio: "/audio/pic_dict/fruits/chilli.m4a",
  },
  {
    src: "/images/vocab/fruits/coconut.jpeg",
    caption: "नारिकेलम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/coconut.m4a",
  },
  {
    src: "/images/vocab/fruits/custard_apple.jpeg",
    caption: "सीताफलम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/custard_apple.m4a",
  },
  {
    src: "/images/vocab/fruits/date.jpeg",
    caption: " खर्जूरम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/date.m4a",
  },
  {
    src: "/images/vocab/fruits/fig.jpeg",
    caption: "अञ्जीरम्, उडुम्बरफलम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/fig.m4a",
  },
  {
    src: "/images/vocab/fruits/gooseberry.jpeg",
    caption: "Gooseberry ● आम्लकम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/gooseberry.m4a",
  },
  {
    src: "/images/vocab/fruits/grapes.jpeg",
    caption: "द्राक्षाफलम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/grapes.m4a",
  },
  {
    src: "/images/vocab/fruits/guava.jpeg",
    caption: "बीजपूरम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/guava.m4a",
  },
  {
    src: "/images/vocab/fruits/jackfruit.jpeg",
    caption: "पनसम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/jackfruit.m4a",
  },
  {
    src: "/images/vocab/fruits/jamun.jpeg",
    caption: "Indian Blackberry ● जम्बूफलम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/jamun.m4a",
  },
  {
    src: "/images/vocab/fruits/lemon.jpeg",
    caption: "जम्बीरम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/lemon.m4a",
  },
  {
    src: "/images/vocab/fruits/lychee.jpeg",
    caption: "लीचिका ● स्त्रीलिङ्गः",
    audio: "/audio/pic_dict/fruits/lychee.m4a",
  },
  {
    src: "/images/vocab/fruits/mango_juice.jpeg",
    caption: "आम्ररसः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/fruits/mango_juice.m4a",
  },
  {
    src: "/images/vocab/fruits/mulberry.jpeg",
    caption: "तूतम्, टङ्कानकम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/mulberry.m4a",
  },
  {
    src: "/images/vocab/fruits/orange.jpeg",
    caption: "नारङ्गम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/orange.m4a",
  },
  {
    src: "/images/vocab/fruits/papaya.jpeg",
    caption: "मधुकर्कटी ● स्त्रीलिङ्गः",
    audio: "/audio/pic_dict/fruits/papaya.m4a",
  },
  {
    src: "/images/vocab/fruits/peach.jpeg",
    caption: "Peach ● आरुकम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/peach_n.m4a",
  },
  {
    src: "/images/vocab/fruits/peach.jpeg",
    caption: "Peach ● आद्रालुः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/fruits/peach_m.m4a",
  },
  {
    src: "/images/vocab/fruits/pear.jpeg",
    caption: "अमृतफलम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/pear.m4a",
  },
  {
    src: "/images/vocab/fruits/pineapple.jpeg",
    caption: "अनानसम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/pineapple.m4a",
  },
  {
    src: "/images/vocab/fruits/plum.jpeg",
    caption: "Plum ● कर्कन्धूफलम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/plum.m4a",
  },
  {
    src: "/images/vocab/fruits/pomegranate.jpeg",
    caption: "दाडिमम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/pomegranate.m4a",
  },
  {
    src: "/images/vocab/fruits/raspberry.jpeg",
    caption: "Raspberry ● कण्टकगुल्मफलम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/raspberry.m4a",
  },
  {
    src: "/images/vocab/fruits/strawberry.jpeg",
    caption: "तृणबदरम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/strawberry.m4a",
  },
  {
    src: "/images/vocab/fruits/sweet_lime.jpeg",
    caption: "Sweet Lime ● मातुलुङ्गा ● स्त्रीलिङ्गः",
    audio: "/audio/pic_dict/fruits/sweet_lime.m4a",
  },
  {
    src: "/images/vocab/fruits/watermelon.jpeg",
    caption: "खर्बूजम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/watermelon.m4a",
  },
  {
    src: "/images/vocab/fruits/mango.jpeg",
    caption: "आम्रम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/mango.m4a",
  },
  {
    src: "/images/vocab/fruits/sunflower_seeds.jpeg",
    caption: "Sunflower Seeds ● सूर्यकान्तिबीजानि ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/sunflower_seeds.m4a",
  },

  {
    src: "/images/vocab/fruits/tamarind.jpeg",
    caption: "Tamarind ● तिन्त्रिणी ● स्त्रीलिङ्गः",
    audio: "/audio/pic_dict/fruits/tamarind.m4a",
  },
  {
    src: "/images/vocab/fruits/walnut.jpeg",
    caption: "अक्षोटम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/walnut.m4a",
  },
  {
    src: "/images/vocab/fruits/peanuts.jpeg",
    caption: "कलायः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/fruits/peanuts.m4a",
  },
  {
    src: "/images/vocab/fruits/raisins.jpeg",
    caption: "Raisin ● शुष्कद्राक्षा ● स्त्रीलिङ्गः",
    audio: "/audio/pic_dict/fruits/raisins.m4a",
  },
  {
    src: "/images/vocab/fruits/star_fruit.jpeg",
    caption: "Star Fruit ● कर्मारकम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/star_fruit.m4a",
  },
  {
    src: "/images/vocab/fruits/pumpkin_seeds.jpeg",
    caption: "Pumpkin seeds ● कूष्माण्डबीजानि ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/fruits/pumpkin_seeds.m4a",
  },
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
