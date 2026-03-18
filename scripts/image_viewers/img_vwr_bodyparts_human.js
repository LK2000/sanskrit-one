// Array of images and their captions
let images = [
  {
    src: "../images/vocab/body_human/abdomen.jpeg",
    caption: "वक्षणा ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_human/abdomen.m4a",
  },
  {
    src: "../images/vocab/body_human/ankle.jpeg",
    caption: "गुल्फः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/ankle.m4a",
  },
  {
    src: "../images/vocab/body_human/anus.jpeg",
    caption: "गुदम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_human/anus.m4a",
  },
  {
    src: "../images/vocab/body_human/arm.jpeg",
    caption: "बाहुः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/arm.m4a",
  },
  {
    src: "../images/vocab/body_human/armpit.jpeg",
    caption: "बाहुमूलम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_human/armpit.m4a",
  },
  {
    src: "../images/vocab/body_human/back.jpeg",
    caption: "पृष्ठम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_human/back.m4a",
  },
  {
    src: "../images/vocab/body_human/bald.jpeg",
    caption: "खल्वाटः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/bald.m4a",
  },
  {
    src: "../images/vocab/body_human/beard.jpeg",
    caption: "श्मश्रु ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_human/beard.m4a",
  },
  {
    src: "../images/vocab/body_human/bladder.jpeg",
    caption: "मूत्राशयः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/bladder.m4a",
  },
  {
    src: "../images/vocab/body_human/blood.jpeg",
    caption: "रक्तम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_human/blood.m4a",
  },
  {
    src: "../images/vocab/body_human/body.jpeg",
    caption: "शरीरम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_human/body.m4a",
  },
  {
    src: "../images/vocab/body_human/bone_marrow.jpeg",
    caption: "अस्थि मज्जा ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_human/bone_marrow.m4a",
  },
  {
    src: "../images/vocab/body_human/bone.jpeg",
    caption: "अस्थि ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_human/bone.m4a",
  },
  {
    src: "../images/vocab/body_human/brain.jpeg",
    caption: "मस्तिष्कः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/brain.m4a",
  },
  {
    src: "../images/vocab/body_human/breast_bone.jpeg",
    caption: "कीकसः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/breast_bone.m4a",
  },
  {
    src: "../images/vocab/body_human/breast.jpeg",
    caption: "स्तनः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/breast.m4a",
  },
  {
    src: "../images/vocab/body_human/buttock.jpeg",
    caption: "नितम्बः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/buttock.m4a",
  },
  {
    src: "../images/vocab/body_human/calf_muscle.jpeg",
    caption: "जङ्घा ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_human/calf_muscle.m4a",
  },
  {
    src: "../images/vocab/body_human/cheeks.jpeg",
    caption: "गल्लः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/cheeks.m4a",
  },
  {
    src: "../images/vocab/body_human/chest.jpeg",
    caption: "वक्षःस्थलम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_human/chest.m4a",
  },
  {
    src: "../images/vocab/body_human/chin.jpeg",
    caption: "चिबुकम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_human/chin.m4a",
  },
  {
    src: "../images/vocab/body_human/collarbone.jpeg",
    caption: "जत्रुकम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_human/collarbone.m4a",
  },
  {
    src: "../images/vocab/body_human/ear.jpeg",
    caption: "कर्णः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/ear.m4a",
  },
  {
    src: "../images/vocab/body_human/elbow.jpeg",
    caption: "कूर्परम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_human/elbow.m4a",
  },
  {
    src: "../images/vocab/body_human/eye.jpeg",
    caption: "नेत्रम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_human/eye.m4a",
  },
  {
    src: "../images/vocab/body_human/eyeball.jpeg",
    caption: "कनीनिका ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_human/eyeball.m4a",
  },
  {
    src: "../images/vocab/body_human/eyebrow.jpeg",
    caption: "भ्रूः ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_human/eyebrow.m4a",
  },
  {
    src: "../images/vocab/body_human/eyelash.jpeg",
    caption: "पक्ष्मम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_human/eyelash.m4a",
  },
  {
    src: "../images/vocab/body_human/eyelid.jpeg",
    caption: "नेत्रपक्ष्मः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/eyelid.m4a",
  },
  {
    src: "../images/vocab/body_human/face.jpeg",
    caption: "वदनम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_human/face.m4a",
  },
  {
    src: "../images/vocab/body_human/finger.jpeg",
    caption: "अङ्गुली ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_human/finger.m4a",
  },
  {
    src: "../images/vocab/body_human/fingernail.jpeg",
    caption: "नखम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_human/fingernail.m4a",
  },
  {
    src: "../images/vocab/body_human/fist.jpeg",
    caption: "मुष्टिः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/fist.m4a",
  },
  {
    src: "../images/vocab/body_human/forehead.jpeg",
    caption: "ललाटः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/forehead.m4a",
  },
  {
    src: "../images/vocab/body_human/gums.jpeg",
    caption: "दन्तपाली ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_human/gums.m4a",
  },
  {
    src: "../images/vocab/body_human/hair.jpeg",
    caption: "केशः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/hair.m4a",
  },
  {
    src: "../images/vocab/body_human/hand.jpeg",
    caption: "हस्तः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/hand.m4a",
  },
  {
    src: "../images/vocab/body_human/head.jpeg",
    caption: "शिरः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/head.m4a",
  },
  {
    src: "../images/vocab/body_human/heart.jpeg",
    caption: "हृदयम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_human/heart.m4a",
  },
  {
    src: "../images/vocab/body_human/heel.jpeg",
    caption: "पार्ष्णिः ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_human/heel.m4a",
  },
  {
    src: "../images/vocab/body_human/hips.jpeg",
    caption: "नितम्बः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/hips.m4a",
  },
  {
    src: "../images/vocab/body_human/index_finger.jpeg",
    caption: "तर्जनी ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_human/index_finger.m4a",
  },
  {
    src: "../images/vocab/body_human/intestines.jpeg",
    caption: "अन्त्रम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_human/intestines.m4a",
  },
  {
    src: "../images/vocab/body_human/jaw.jpeg",
    caption: "हनुः ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_human/jaw.m4a",
  },
  {
    src: "../images/vocab/body_human/joint.jpeg",
    caption: "सन्धिः ● unknown",
    audio: "/audio/pic_dict/body_human/joint.m4a",
  },
  {
    src: "../images/vocab/body_human/kidney.jpeg",
    caption: "वृक्कः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/kidney.m4a",
  },
  {
    src: "../images/vocab/body_human/knee.jpeg",
    caption: "जानुः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/knee.m4a",
  },
  {
    src: "../images/vocab/body_human/knuckles.jpeg",
    caption: "अङ्गुलिसन्धिः ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_human/knuckles.m4a",
  },
  {
    src: "../images/vocab/body_human/leg_foot.jpeg",
    caption: "पादः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/leg_foot.m4a",
  },
  {
    src: "../images/vocab/body_human/little_finger.jpeg",
    caption: "कनिष्टिका ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_human/little_finger.m4a",
  },
  {
    src: "../images/vocab/body_human/liver.jpeg",
    caption: "यकृत् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_human/liver.m4a",
  },
  {
    src: "../images/vocab/body_human/lower_lip.jpeg",
    caption: "अधरम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_human/lower_lip.m4a",
  },
  {
    src: "../images/vocab/body_human/lung.jpeg",
    caption: "पुप्फुसः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/lung.m4a",
  },
  {
    src: "../images/vocab/body_human/middle_finger.jpeg",
    caption: "मध्यमा ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_human/middle_finger.m4a",
  },
  {
    src: "../images/vocab/body_human/mouth.jpeg",
    caption: "मुखम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_human/mouth.m4a",
  },
  {
    src: "../images/vocab/body_human/muscle.jpeg",
    caption: "स्नायुः ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_human/muscle.m4a",
  },
  {
    src: "../images/vocab/body_human/mustache.jpeg",
    caption: "श्मश्रु ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_human/mustache.m4a",
  },
  {
    src: "../images/vocab/body_human/navel.jpeg",
    caption: "नाभिः ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_human/navel.m4a",
  },
  {
    src: "../images/vocab/body_human/neck.jpeg",
    caption: "ग्रीवा ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_human/neck.m4a",
  },
  {
    src: "../images/vocab/body_human/nipple.jpeg",
    caption: "स्तनशिखा ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_human/nipple.m4a",
  },
  {
    src: "../images/vocab/body_human/nose.jpeg",
    caption: "नासिका ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_human/nose.m4a",
  },
  {
    src: "../images/vocab/body_human/nostril.jpeg",
    caption: "नासिकाछिद्रम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_human/nostril.m4a",
  },
  {
    src: "../images/vocab/body_human/palm.jpeg",
    caption: "करतलः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/palm.m4a",
  },
  {
    src: "../images/vocab/body_human/pelvis.jpeg",
    caption: "वस्तिदेशः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/pelvis.m4a",
  },
  {
    src: "../images/vocab/body_human/penis.jpeg",
    caption: "शिश्नम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_human/penis.m4a",
  },
  {
    src: "../images/vocab/body_human/plait.jpeg",
    caption: "वेणी ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_human/plait.m4a",
  },
  {
    src: "../images/vocab/body_human/ribs.jpeg",
    caption: "पार्श्वास्थि ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_human/ribs.m4a",
  },
  {
    src: "../images/vocab/body_human/ring_finger.jpeg",
    caption: "अनामिका ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_human/ring_finger.m4a",
  },
  {
    src: "../images/vocab/body_human/saliva.jpeg",
    caption: "लाला ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_human/saliva.m4a",
  },
  {
    src: "../images/vocab/body_human/scrotum.jpeg",
    caption: "मूत्रकोशः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/scrotum.m4a",
  },
  {
    src: "../images/vocab/body_human/shoulder.jpeg",
    caption: "स्कन्धः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/shoulder.m4a",
  },
  {
    src: "../images/vocab/body_human/skeleton.jpeg",
    caption: "अस्थिपञ्जरः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/skeleton.m4a",
  },
  {
    src: "../images/vocab/body_human/skin.jpeg",
    caption: "चर्मम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_human/skin.m4a",
  },
  {
    src: "../images/vocab/body_human/skull.jpeg",
    caption: "कपालः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/skull.m4a",
  },
  {
    src: "../images/vocab/body_human/sole.jpeg",
    caption: "पादतलम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_human/sole.m4a",
  },
  {
    src: "../images/vocab/body_human/spine.jpeg",
    caption: "मेरुदण्डः ● पुल्लिङ्गः",
    audio: "/audio/pic_dict/body_human/spine.m4a",
  },
  {
    src: "../images/vocab/body_human/stomach.jpeg",
    caption: "उदरम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_human/stomach.m4a",
  },
  {
    src: "../images/vocab/body_human/sweat.jpeg",
    caption: "स्वेदः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/sweat.m4a",
  },
  {
    src: "../images/vocab/body_human/tears.jpeg",
    caption: "अश्रूणि ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_human/tears.m4a",
  },
  {
    src: "../images/vocab/body_human/testicle.jpeg",
    caption: "मुष्कः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/testicle.m4a",
  },
  {
    src: "../images/vocab/body_human/thigh.jpeg",
    caption: "ऊरुः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/thigh.m4a",
  },
  {
    src: "../images/vocab/body_human/throat.jpeg",
    caption: "कण्ठः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/throat.m4a",
  },
  {
    src: "../images/vocab/body_human/thumb.jpeg",
    caption: "अङ्गुष्ठः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/thumb.m4a",
  },
  {
    src: "../images/vocab/body_human/toe.jpeg",
    caption: "पादाङ्गुलिः ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_human/toe.m4a",
  },
  {
    src: "../images/vocab/body_human/tongue.jpeg",
    caption: "जिह्वा ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_human/tongue.m4a",
  },
  {
    src: "../images/vocab/body_human/tooth.jpeg",
    caption: "दन्तः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/tooth.m4a",
  },
  {
    src: "../images/vocab/body_human/upper_lip.jpeg",
    caption: "ओष्ठः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/upper_lip.m4a",
  },
  {
    src: "../images/vocab/body_human/vagina.jpeg",
    caption: "योनी ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_human/vagina.m4a",
  },
  {
    src: "../images/vocab/body_human/waist.jpeg",
    caption: "कटी ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_human/waist.m4a",
  },
  {
    src: "../images/vocab/body_human/wrist.jpeg",
    caption: "मणिबन्धः ● पुल्लिङ्गम्",
    audio: "/audio/pic_dict/body_human/wrist.m4a",
  },
  {
    src: "../images/vocab/body_human/lips.jpeg",
    caption: "ओष्ठम् ● नपुंसकलिङ्गम्",
    audio: "/audio/pic_dict/body_human/lips.m4a",
  },
  {
    src: "../images/vocab/body_human/pregnant.jpeg",
    caption: "गर्भिणी ● स्त्रीलिङ्गम्",
    audio: "/audio/pic_dict/body_human/pregnant.m4a",
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
