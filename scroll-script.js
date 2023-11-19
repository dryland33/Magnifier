const scrollText = document.getElementById('scrollText');

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    scrollTextLeft();
  } else if (event.key === 'ArrowRight') {
    scrollTextRight();
  }
});

function scrollTextLeft() {
  scrollText.style.left = parseInt(scrollText.style.left || 0) - 10 + 'px';
}

function scrollTextRight() {
  scrollText.style.left = parseInt(scrollText.style.left || 0) + 10 + 'px';
}
