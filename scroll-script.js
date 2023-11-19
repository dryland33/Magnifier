const scrollContainer = document.getElementById('scrollContainer');
const scrollText = document.getElementById('scrollText');

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    scrollTextLeft();
  } else if (event.key === 'ArrowRight') {
    scrollTextRight();
  }
});

function scrollTextLeft() {
  scrollContainer.scrollLeft -= 10;
}

function scrollTextRight() {
  scrollContainer.scrollLeft += 10;
}
