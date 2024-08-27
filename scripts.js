var arrow = document.getElementsByClassName('bi-arrow-down-circle')[0]
var about = document.getElementById('about')
arrow.addEventListener('click', function(event) {
    event.preventDefault();
    about.scrollIntoView({ behavior: 'smooth' });
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
const sidebar = document.querySelector('.side-bar')
const navBar = document.querySelector('.nav-List')

function showSidebar() {
    sidebar.style['display'] = 'flex'
}
function hideSideBar() {
    sidebar.style['display'] = 'none'
}
