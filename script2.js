const magnifierContainer = document.getElementById('magnifierContainer');
const magnifierContent = document.getElementById('magnifierContent');
const magnifierGlass = document.createElement('div');
magnifierGlass.className = 'magnifier-glass';

magnifierContainer.appendChild(magnifierGlass);

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
    magnifierContent.innerHTML = `<p>${text}</p>`;
}

magnifierContent.addEventListener('mousemove', (e) => {
    // Magnification logic (same as before)
});

magnifierContent.addEventListener('mouseleave', () => {
    magnifierGlass.style.visibility = 'hidden';
});
