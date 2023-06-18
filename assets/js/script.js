const slideshowImages = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg"
];

let currentSlide = 0;
const slideshow = document.getElementById("slideshow");

function changeSlide() {
  slideshow.style.backgroundImage = `url('${slideshowImages[currentSlide]}')`;
  currentSlide = (currentSlide + 1) % slideshowImages.length;
}

setInterval(changeSlide, 3000);