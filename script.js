// Pizzeria Webbutveckling





var i = 0; // start ställe
var images = [];
var time = 3000;

//Image list
images[0] = 'pizza3.jpg';
images[1] = 'pizza4.jpg';
images[2] = 'pizza5.jpg';


//Change Image
function changeImg() {
  document.slide.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;



/*
var slideIndex = 1;
showSlides(slideIndex);

// Nästa/tidigare kontroller
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail bild kontroll
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length)
    slideIndex = 1
}
if (n < 1) {
  slideIndex = slides.length
}
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " active";

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
  */