const slider_init = document.querySelectorAll('.slide-in')

window.addEventListener("load", () => {
    slider_init.forEach((box, index) => {
        setTimeout(() => {
            box.classList.remove('slide-in')
            box.classList.add('show');
        }, 500 * index);
    });
});

// selects elements based on where the viewport is on screen

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log(entry)
            entry.target.classList.add('show'); 
        }
        else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');


// tells IntersectionObserver to observe els with class "hidden"
hiddenElements.forEach((el) => observer.observe(el))

// Add your grid items to be observed
document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid__item.hidden');

    gridItems.forEach((gridItem) => {
        observer.observe(gridItem);
    });
});