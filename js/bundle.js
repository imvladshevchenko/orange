var wheel = document.getElementById("wheel");
var wheelBtn = document.getElementById("button");
var closePopup = document.getElementById("closePopup");
var firstWrapper = document.getElementById("firstWrapper");
var secondWrapper = document.getElementById("secondWrapper");
var getPrizes = document.getElementById("getPrizes");
var redirectLink = document.getElementById("redirectLink");
var coins = document.getElementById("coins")
var flowers = document.getElementById("flowers")
var fortuneWheel = document.getElementById("fortuneWheel")
var mobileCoins = document.getElementById("mobileCoins")

var counter = 0;

function animation() {
  if (counter < 1) {
    wheel.classList.toggle("step-1");
    wheelBtn.classList.toggle("animation-in-process");
    counter++;
  } else {
    firstWrapper.style.display = "none";
    secondWrapper.style.display = "flex";
    fortuneWheel.style.display = "none"
    getPrizes.style.display = "none";
    redirectLink.style.display = "flex";
    wheel.classList.toggle("step-2");
    wheelBtn.classList.toggle("animation-in-process");
  }
  function modalPopup() {
    modal.classList.toggle("modal-active");
    overlay.classList.toggle("overlay-active");
    flowers.style.display="block"
    if (innerWidth < 500) {
      mobileCoins.style.display="block"
    } else {
      coins.style.zIndex="11"
    }
  }
  setTimeout(modalPopup, 5500);
}

function closeModal() {
  modal.classList.toggle("modal-active");
  overlay.classList.toggle("overlay-active");
  wheelBtn.classList.toggle("animation-in-process");
  coins.style.zIndex="0"
  flowers.style.display="none"
  mobileCoins.style.display="none"
}
