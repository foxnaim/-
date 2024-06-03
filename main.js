const imageWrapper = document.querySelector(".image-wrapper");
const imageBefore = document.querySelector(".image-before");
const textOverlay = document.querySelector(".text-overlay");
const imageSlider = document.querySelector(".image-slider");
const textChange = document.querySelector(".text-change");
const words = [
  "надёжного",
  "удобного",
  "красивого",
  "тёплого",
  "бесшумного",
];
let slidePoint = 0;
let wordIndex = 0;

function onChangeText() {
  wordIndex += 1;
  if (words.length == wordIndex) {
    wordIndex = 0;
  }
  textChange.innerHTML = words[wordIndex];
}

function animateSlider(event) {
  slidePoint += 1;
  if (slidePoint == 50) {
    slidePoint = 0;
    onChangeText();
  }
  let x = event.offsetX;
  imageBefore.animate(
    { width: x + "px" },
    { fill: "forwards", duration: 200 }
  );
  imageSlider.animate(
    { left: x + "px" },
    { fill: "forwards", duration: 200 }
  );
}

function revertToDefault() {
  imageWrapper.removeEventListener("mousemove", animateSlider);
  imageSlider.animate(
    { left: "50%" },
    { fill: "forwards", duration: 500 }
  );
  imageBefore.animate(
    { width: "50%" },
    { fill: "forwards", duration: 500 }
  );
}

imageWrapper.addEventListener("mousedown", (event) => {
  imageWrapper.addEventListener("mousemove", animateSlider);
});

document.addEventListener("mouseup", () => {
  imageWrapper.removeEventListener("mousemove", animateSlider);
});

imageWrapper.addEventListener("mouseleave", revertToDefault);