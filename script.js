var typed = new Typed('#element', {
    strings: ['<i>Web Development</i>', '<i>UI/UX Design</i>', '<i>Software Engineering.</i>'],
    typeSpeed: 100,
});


// for smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
