const magnifierContainer = document.getElementById('magnifierContainer');
const magnifierContent = document.getElementById('magnifierContent');
const magnifyingGlass = document.getElementById('magnifyingGlass');

magnifierContent.addEventListener('mousemove', (e) => {
    const rect = magnifierContent.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const glassSize = magnifyingGlass.offsetWidth / 2;
    const offsetX = mouseX - glassSize;
    const offsetY = mouseY - glassSize;

    magnifyingGlass.style.left = `${offsetX}px`;
    magnifyingGlass.style.top = `${offsetY}px`;

    magnifyingGlass.style.backgroundImage = `url("${getBackgroundImage(magnifierContent)}")`;
    magnifyingGlass.style.backgroundPosition = `-${offsetX * 2}px -${offsetY * 2}px`;

    magnifyingGlass.style.transform = 'scale(2)';
});

magnifierContent.addEventListener('mouseleave', () => {
    magnifyingGlass.style.transform = 'scale(1)';
});

function getBackgroundImage(element) {
    const computedStyle = window.getComputedStyle(element);
    return computedStyle.backgroundImage.replace(/url\(['"]?([^'"]*)['"]?\)/, '$1');
}
