// Get the marquee container and content elements
const marqueeContainer = document.getElementById('marqueeContainer');
const marqueeContent = document.getElementById('marqueeContent');

// Set up event listeners for key presses
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    // Scroll left when the left arrow key is pressed
    scrollMarquee('left');
  } else if (event.key === 'ArrowRight') {
    // Scroll right when the right arrow key is pressed
    scrollMarquee('right');
  }
});

// Function to scroll the marquee in a specified direction
function scrollMarquee(direction) {
  const scrollAmount = 10; // Adjust as needed
  const currentScroll = marqueeContainer.scrollLeft;

  if (direction === 'left') {
    marqueeContainer.scrollLeft = currentScroll - scrollAmount;
  } else if (direction === 'right') {
    marqueeContainer.scrollLeft = currentScroll + scrollAmount;
  }
}
