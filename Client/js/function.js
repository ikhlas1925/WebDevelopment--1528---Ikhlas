//FullPage Setup
new fullpage('#fullpage', {
    autoScrolling: true,
    keboardScrolling: true,
    fitToSection: true,
})

//Hamburger Setup
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {

        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

//Creativity Text Animation
const creativity = document.querySelectorAll("#creativity path");

for (let i = 0; i < creativity.length; i++) {
    console.log(`Letter ${i} is ${creativity[i].getTotalLength()}`);
} 