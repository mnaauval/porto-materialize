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

// Collapsible
const collapsible = document.querySelectorAll(".collapsible");
M.Collapsible.init(collapsible);
