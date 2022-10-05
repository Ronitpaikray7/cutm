const toggleButten = document.getElementsByClassName('toggle')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButten.addEventListener('click', () => {
navbarLinks.classList.toggle('active')
})



document.getElementById('playVid').onclick = function () {
    document.getElementById('video').play();
};