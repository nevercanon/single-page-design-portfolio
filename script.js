// const works = document.querySelector('.works-section');
// const arrowLeft = document.querySelector('.left');
// const arrowRight = document.querySelector('.right');

// let direction;

// arrowLeft.addEventListener('click', function() {
//     direction = 1;
//     works.style.transform = 'translate(285px)';
// })

// arrowRight.addEventListener('click', function() {
//     direction = -1;
//     works.style.transform = 'translate(-286px)';
// })

// works.addEventListener('transitionend', function() {
//     if (direction === -1) {
//         works.appendChild(works.firstElementChild);
//     } else if (direction === 1) {
//         works.prepend(works.lastElementChild);
//     }
    

//     works.style.transition = 'none';
//     works.style.transform = 'translate(0)';

//     setTimeout(function() {
//         works.style.transition = 'all 0.5s';
//     })
    
// })

// for tablet and computer: adjust translate amount, find out how to adjust the translate(0), hide the overflow somehow

let w = document.documentElement.clientWidth || window.innerWidth;
if (w < 768) {
//Probably mobile
const works = document.querySelector('.works-section');
const arrowLeft = document.querySelector('.left');
const arrowRight = document.querySelector('.right');

let direction;

arrowLeft.addEventListener('click', function() {
    direction = 1;
    works.style.transform = 'translate(286px)';
})

arrowRight.addEventListener('click', function() {
    direction = -1;
    works.style.transform = 'translate(-286px)';
})

works.addEventListener('transitionend', function() {
    if (direction === -1) {
        works.appendChild(works.firstElementChild);
    } else if (direction === 1) {
        works.prepend(works.lastElementChild);
    }
    

    works.style.transition = 'none';
    works.style.transform = 'translate(0)';

    setTimeout(function() {
        works.style.transition = 'all 0.5s';
    })
    
})
} else {
// Probably desktop
const works = document.querySelector('.works-section');
const arrowLeft = document.querySelector('.left');
const arrowRight = document.querySelector('.right');

let direction;

arrowLeft.addEventListener('click', function() {
    direction = 1;
    works.style.transform = 'translate(556px)';
})

arrowRight.addEventListener('click', function() {
    direction = -1;
    works.style.transform = 'translate(-556px)';
})

works.addEventListener('transitionend', function() {
    if (direction === -1) {
        works.appendChild(works.firstElementChild);
    } else if (direction === 1) {
        works.prepend(works.lastElementChild);
    }
    

    works.style.transition = 'none';
    works.style.transform = 'translate(0)';

    setTimeout(function() {
        works.style.transition = 'all 0.5s';
    })
    
})
}