const btn = document.getElementById('boton');
const Menu = document.querySelector('.menu');
// convertir esto en arreglo para que el map lo leea
const slider = Array.from(document.querySelectorAll('.carrusel__img'));
const containerSlider = document.querySelector('.carrusel');
const botonNext = document.querySelector('.next');
const botonPrev = document.querySelector('.prev');

btn.addEventListener('click', function () {
    Menu.classList.toggle('mostrarMenu')
});

// condiciones iniciales 
const valorimg = slider.map(() => {});
containerSlider.style.width = valorimg.length * 100 + "%"
containerSlider.insertAdjacentElement('afterbegin', slider[slider.length - 1])

function next() {
    containerSlider.style.left = "-200%"
    containerSlider.style.transition = ".5s linear"
    setTimeout(() => {
        containerSlider.style.transition = "none"
        containerSlider.insertAdjacentElement('beforeend', document.querySelectorAll('.carrusel__img')[0])
        containerSlider.style.left = "-100%"

    }, 500);
}

function prev() {
    const slider = document.querySelectorAll('.carrusel__img')
    containerSlider.style.left = "0"
    containerSlider.style.transition = ".5s linear"
    setTimeout(() => {
        containerSlider.style.transition = "none"
        containerSlider.insertAdjacentElement('afterbegin', slider[slider.length - 1])
        containerSlider.style.left = "-100%"

    }, 500);
}


botonNext.addEventListener('click', function () {
    next()
});
botonPrev.addEventListener('click', function () {
    prev()
});