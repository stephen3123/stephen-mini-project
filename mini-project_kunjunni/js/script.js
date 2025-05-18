
const images = ["images/roja1.jpg", "images/roja2.jpg", "images/roja3.jpg"];
let index = 0;
const slideshow = document.getElementById("slideshow-img");

setInterval(() => {
  index = (index + 1) % images.length;
  slideshow.src = images[index];
}, 3000);
