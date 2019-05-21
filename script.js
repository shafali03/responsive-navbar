

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let navToggle = document.querySelector("#nav-toggle");

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});

navToggle.addEventListener("click", function () {
    navToggle.classList.toggle("active");
})

