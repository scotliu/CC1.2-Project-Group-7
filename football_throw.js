// Authored by Luc Milburn
// This script is responsible for having a football icon move with your mouse left to right.

const football = document.getElementById("cartoon_football");
const playArea = document.getElementById("football_animate");

playArea.addEventListener("mousemove", function(event) {
  football.style.display = "block";
  const x = event.clientX;
  const y = event.clientY;

  // Set football's left/right offset to the coords from clientX/clientY
  football.style.left = Math.min(x, window.innerWidth - 110) + "px";
  football.style.right = y + "px";
});