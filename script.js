//togle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika humberger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar untuk ngilangin nav

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
//javascript untuk pop up vidio start
const popupButtons = document.querySelectorAll(".popup-button");
const popupOverlays = document.querySelectorAll(".popup-overlay");
const videoPlayers = document.querySelectorAll(".video-player");

popupButtons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    popupOverlays[index].style.display = "block";
    videoPlayers[index].currentTime = 0;
    videoPlayers[index].play();
  });
});

popupOverlays.forEach(function (overlay, index) {
  overlay.addEventListener("click", function (event) {
    if (
      event.target === overlay ||
      event.target.classList.contains("close-button")
    ) {
      overlay.style.display = "none";
      videoPlayers[index].pause();
    }
  });
});

//javascript untuk pop up vidio end
const dropdownTriggers = document.querySelectorAll('.btn');
const dropdowns = document.querySelectorAll('.dropdown');

dropdownTriggers.forEach((trigger, index) => {
  trigger.addEventListener('click', () => {
    dropdowns[index].classList.toggle('active');
  });
});