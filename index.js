
const images = document.querySelectorAll('.sliderImg');

let count = 0;

const next = document.querySelector('.next');
next.onclick = nextFunction;

const prev = document.querySelector('.prev');
prev.onclick = prevFunction;

const reset = document.querySelector('.reset');
reset.onclick = resetFunction;

let img = document.querySelector('.maxImg');

function nextFunction() {
    count++;
    images.forEach((element, index) => {
        element.classList.remove('activeImg');
        if (count == index ) {
            element.classList.add('activeImg');
        } else if (count == images.length) {
            count = 0;
            element.classList.add('activeImg');
        }
        img.setAttribute('src', `img/${count + 1}.png`);
    });
    
}

function prevFunction() {
    count--;
    images.forEach((element, index) => {
        element.classList.remove('activeImg');
        if (count == index ) {
            element.classList.add('activeImg');
        } else if (count < 0) {
            count = 5;
        }
        img.setAttribute('src', `img/${count + 1}.png`);
    });
}

function resetFunction () {
    images.forEach((element, index) => {
        count = 0;
        element.classList.remove('activeImg');
        if (count == index) {
            element.classList.add('activeImg');
        }
        img.setAttribute('src', `img/${count + 1}.png`);
    });
}

