const pre = document.querySelector('pre');


document.addEventListener('mousemove', (e) => {
    rotateElement(e, pre);
})
const rotateElement = function (event, element) {
    const x = event.clientX;
    const y = event.clientY;

    const middleX = window.innerHeight / 2;
    const middleY = window.innerWidth / 2;

    const offsetX = ((x - middleX) / middleX);
    const offsetY = ((y - middleY) / middleY);

}

