let sidebar = document.querySelector(".sidebar");
let background = document.querySelector(".background")
let closeBtn = document.querySelectorAll(".btn-menu");
let closeMenu1 = document.querySelector("#close-menu1")
let closeMenu2 = document.querySelector("#close-menu2")
let closeMenu3 = document.querySelector("#close-menu3")
let closeMenu4 = document.querySelector("#close-menu4")

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  background.classList.toggle("open");
  console.log(sidebar)
});

closeMenu1.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  background.classList.toggle("open");
  console.log(sidebar)
});

closeMenu2.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  background.classList.toggle("open");
  console.log(sidebar)
});

closeMenu3.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  background.classList.toggle("open");
  console.log(sidebar)
});

closeMenu4.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  background.classList.toggle("open");
  console.log(sidebar)
});



const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Developer", "Freelancer"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 1500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

