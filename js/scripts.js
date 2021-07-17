// Preloader
window.onload = function () {
  document.querySelector("#preloader-holder").style.display = "none";
};

// SideNavbar
const sideNav = document.querySelectorAll(".sidenav");
M.Sidenav.init(sideNav);

// Slider
const slider = document.querySelectorAll(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 600,
  interval: 3000,
});

// Owl Carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    items: 3,
    margin: 30,
    autoplay: false,
    smartSpeed: 700,
    autoplayTimeout: 6000,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      460: {
        items: 1,
        margin: 0,
      },
      576: {
        items: 2,
        margin: 20,
      },
      992: {
        items: 3,
        margin: 30,
      },
    },
  });
});

// Parallax
const parallax = document.querySelectorAll(".parallax");
M.Parallax.init(parallax);

// Material Box
const materialBox = document.querySelectorAll(".materialboxed");
M.Materialbox.init(materialBox);

// Scrollspy
const scrollSpy = document.querySelectorAll(".scrollspy");
M.ScrollSpy.init(scrollSpy, {
  scrollOffset: 50,
});

// Contact Submit
const scriptURL = "https://script.google.com/macros/s/AKfycbxiJyd2NJSMPhghq_pxxPZp4bROZZBflzMDMltvmHHDP6t7JLrp5P2-U_EnQxXP-Djn/exec";
const form = document.forms["submit-to-google-sheet"];
const btnSend = document.querySelector(".btn-send");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  btnSend.classList.toggle("disabled");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      btnSend.classList.toggle("disabled");
      M.toast({ html: "Terimakasih! Pesan berhasil dikirim" });
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
