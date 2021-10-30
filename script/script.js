//toggle menu
function toggleMenu() {
    let navigation = document.querySelector(".navigation");
    navigation.classList.toggle("active");
}

//fancy burger
const btn = document.querySelector(".fancy-burger");

btn.addEventListener("click", () => {
    btn.querySelectorAll("span").forEach(span => span.classList.toggle("open"));
});

//logo spin animation
function spin() {
    let spin = document.getElementById('code-logo');

    spin.classList.add('spin');

    setTimeout(() => {
        spin.classList.remove('spin');
    }, 1200);
}

//projects carrousel

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
}