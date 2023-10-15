
// selects elements based on where the viewport is on screen

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})
 
const hiddenElements = document.querySelectorAll('.hidden'); 

// tells IntersectionObserver to observe els with class "hidden"
hiddenElements.forEach((el) => observer.observe(el))