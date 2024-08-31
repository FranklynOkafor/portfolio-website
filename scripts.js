var downarrow = document.getElementsByClassName('bi-arrow-down-circle')[0]
var about = document.getElementById('about')
downarrow.addEventListener('click', function(event) {
    event.preventDefault();
    about.scrollIntoView({ behavior: 'smooth' });
})


var uparrow = document.getElementsByClassName('uparrow')[0]
var first = document.getElementById('first')
uparrow.addEventListener('click', function(event) {
    event.preventDefault();
    first.scrollIntoView({ behavior: 'smooth' });
})

// CAROUSEL 

document.querySelectorAll('.carousel').forEach(carousel => {
    const items = carousel.querySelectorAll('.carousel__item')
    const buttonsHTML = Array.from(items, () =>{
        return `<span class="carousel__button"></span>`;
    });
    carousel.insertAdjacentHTML('beforeend',`
        <div class="carousel__nav">
            ${ buttonsHTML.join("") }
        <div/>

    `);
    const buttons = carousel.querySelectorAll('.carousel__button');
        console.log(buttons)

    buttons.forEach((button, index) => {
        button.addEventListener("click", () =>{
            // unselect all buttons
            items.forEach(item => item.classList.remove("carousel__item--selected"));
            buttons.forEach(button => button.classList.remove("carousel__button--selected"))

            items[index].classList.add('carousel__item--selected')
            button.classList.add('carousel__button--selected')
        })
    })

});




// bringing the sidebar

const menu = document.querySelector('.menu-bars')
console.log('menu')
const sidebar = document.querySelector('.side-bar')
console.log(sidebar)
const navBar = document.querySelector('.nav-List')

console.log(navBar)

function showSidebar() {
    sidebar.style['display'] = 'flex'
}
function hideSideBar() {
    sidebar.style['display'] = 'none'
}
