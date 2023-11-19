const marqueeContainer = document.getElementById('marqueeContainer');
const marqueeContent = document.getElementById('marqueeContent');

function loadText() {
    const fileInput = document.getElementById('fileInput');
    
    const file = fileInput.files[0];
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function (e) {
            const textContent = e.target.result;
            displayText(textContent);
        };
        
        reader.readAsText(file);
    }
}

function displayText(text) {
    marqueeContent.innerText = text;
    marqueeContainer.scrollLeft = 0; // Reset scroll position to the beginning
}

marqueeContainer.addEventListener('mousemove', (e) => {
    const speed = 5; // Adjust the scrolling speed as needed
    marqueeContainer.scrollLeft += speed;
});

marqueeContainer.addEventListener('mouseleave', () => {
    // Additional logic can be added if needed when the mouse leaves the marquee area
});
