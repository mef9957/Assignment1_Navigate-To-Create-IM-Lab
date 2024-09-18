
// W3 Schools Picture Carasouel 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// W3 Schools Interactive Map 

// Predefined directions for each point
const directions = {
    point1: "From D1 (Dining Hall): After fueling up, head straight down the path. Pause at the majestic palms—take a deep breath, admire their beauty. Keep walking straight, and voilà! The Art Center will be dazzling on your left.",
    point2: "From Palms: With the palms in your rearview mirror, march forward, then veer left. And there it is—your destination, the Art Center, ready to impress!",
    point3: "From East Plaza: From the East Plaza, walk North as if you’re heading toward an epic discovery. Keep going, and right in front of you will be the crown jewel: the Art Center!",
    point4: "From A5: Take a right turn out of A5 like you’re stepping into an adventure. Then, continue straight, and as if by magic, the Art Center will pop up on your left, waiting for its next audience.",
    point5: "From A2: From A2, take a right like you’re following a treasure map, then march straight ahead. Keep your eyes open because soon, the Art Center will reveal itself on your left—like an artsy hidden gem.",
    point6: "From Welcome Center:Snap that perfect selfie with the iconic #NYUAD (you know you want to). Then, stroll straight ahead, soaking in the campus vibes. Keep moving, and before you know it, the Art Center will make a grand appearance on your left."
};

// Function to show directions when a point is clicked
function showDirection(point) {
    // Display the direction associated with the clicked point
    const directionBox = document.getElementById('direction-box');
    directionBox.innerHTML = directions[point];
}