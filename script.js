const magnifierContainer = document.getElementById('magnifierContainer');
const magnifierContent = document.getElementById('magnifierContent');
const magnifierGlass = document.createElement('div');
magnifierGlass.className = 'magnifier-glass';

magnifierContainer.appendChild(magnifierGlass);

magnifierContent.addEventListener('mousemove', (e) => {
    const mouseX = e.pageX - magnifierContainer.offsetLeft;
    const mouseY = e.pageY - magnifierContainer.offsetTop;

    const glassSize = magnifierGlass.offsetWidth / 2;
    const offsetX = mouseX - glassSize;
    const offsetY = mouseY - glassSize;

    magnifierGlass.style.left = `${offsetX}px`;
    magnifierGlass.style.top = `${offsetY}px`;

    magnifierGlass.style.visibility = 'visible';

    magnifierGlass.style.backgroundPosition = `-${offsetX * 2}px -${offsetY * 2}px`;
});

magnifierContent.addEventListener('mouseleave', () => {
    magnifierGlass.style.visibility = 'hidden';
});
