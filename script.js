const ball = document.getElementById("ball");
let posX = window.innerWidth / 2;
let posY = window.innerHeight / 2;
const step = 50;

function moveBall(dx, dy) {
  posX = Math.max(0, Math.min(window.innerWidth - 50, posX + dx));
  posY = Math.max(0, Math.min(window.innerHeight - 50, posY + dy));
  ball.style.left = posX + "px";
  ball.style.top = posY + "px";
}

// Touch gesture detection
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener("touchstart", e => {
  const touch = e.touches[0];
  touchStartX = touch.clientX;
  touchStartY = touch.clientY;
});

document.addEventListener("touchend", e => {
  const touch = e.changedTouches[0];
  const dx = touch.clientX - touchStartX;
  const dy = touch.clientY - touchStartY;

  if (Math.abs(dx) > Math.abs(dy)) {
    // Horizontal swipe
    if (dx > 0) moveBall(step, 0); // Right
    else moveBall(-step, 0);       // Left
  } else {
    // Vertical swipe
    if (dy > 0) moveBall(0, step); // Down
    else moveBall(0, -step);       // Up
  }
});
