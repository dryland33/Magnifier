// Get the container and text elements
const scrollContainer = document.getElementById('scrollContainer');
const scrollText = document.getElementById('scrollText');

// Set up event listeners for key presses
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    // Scroll left when the left arrow key is pressed
    scrollTextLeft();
  } else if (event.key === 'ArrowRight') {
    // Scroll right when the right arrow key is pressed
    scrollTextRight();
  }
});

// Function to scroll the text to the left
function scrollTextLeft() {
  scrollContainer.scrollLeft -= 10; // Adjust as needed
}

// Function to scroll the text to the right
function scrollTextRight() {
  scrollContainer.scrollLeft += 10; // Adjust as needed
}
