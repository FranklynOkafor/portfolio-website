var arrow = document.getElementsByClassName('bi-arrow-down-circle')[0]
var about = document.getElementById('about')
arrow.addEventListener('click', function(event) {
    event.preventDefault();
    about.scrollIntoView({ behavior: 'smooth' });
})