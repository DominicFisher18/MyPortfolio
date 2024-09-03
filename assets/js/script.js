let navbar = document.querySelector('.navbar')

document.onscroll = () => {
    if (window.scrollY > 0) {
        navbar.classList.add('onscroll')
    } else {
        navbar.classList.remove('onscroll')
    }
}