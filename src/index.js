// import "./index.css";
// import "./animate.js";

import intObserver from "./InterS.js";

const ham = document.getElementById("ham");
const mobNav = document.getElementById("mobNav");
const carS = document.querySelector(".carsoul");

const Img = document.querySelectorAll("#Img");

// carS.style.width = "1000px";
// for (let x = 0; x < Img.length; x++) {
//   Img[x].style.width = "800px";
// }
mobNav.style.display = "none";

if (ham == true) {
  console.log(true);
} else {
  console.log(false);
}

ham.addEventListener("click", () => {
  if (mobNav.style.display == "none") {
    mobNav.style.display = "block";
  } else {
    mobNav.style.display = "none";
  }
  console.log("check");
});

const CImg = document.getElementById("CImg");

intObserver();
// console.log(fName);

// console.log(data[0].image);

// console.log(hero.classList);
