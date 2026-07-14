
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

const mobileLinks = document.querySelectorAll(".nav-links a");
mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

const text = [
    "Cloudexify Intern",
    "Computer Science Student",
    "Full Stack Developer",
    "Problem Solver"
];
let textIndex = 0;
let charIndex = 0;
const typing = document.getElementById("typing");
function typeEffect(){
    if(charIndex < text[textIndex].length){
        typing.textContent += text[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect,100);
    }
    else{
        setTimeout(eraseEffect,1500);
    }
}
function eraseEffect(){
    if(charIndex > 0){
        typing.textContent = text[textIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(eraseEffect,50);
    }
    else{
        textIndex++;
        if(textIndex >= text.length){
            textIndex = 0;
        }
        setTimeout(typeEffect,300);
    }
}
window.onload = typeEffect;

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll",()=>{
    let current = "";
    sections.forEach(section=>{
        const sectionTop = section.offsetTop - 120;
        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }
    });
    navItems.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href") == "#" + current){
            link.classList.add("active");
        }
    });
});

const header = document.querySelector("header");
window.addEventListener("scroll",()=>{
    if(window.scrollY > 100){
        header.style.background="#020617";
    }
    else{
        header.style.background="rgba(15,23,42,.95)";
    }
});

const progressBars = document.querySelectorAll(".progress");
function animateBars(){
    progressBars.forEach(bar=>{
        let value = bar.getAttribute("data-width");
        bar.style.width = value;
    });
}
window.addEventListener("scroll",()=>{
    const skills = document.getElementById("skills");
    if(skills){
        const position = skills.getBoundingClientRect().top;
        const screen = window.innerHeight;
        if(position < screen){
            animateBars();
        }
    }
});

const form = document.getElementById("contact-form");
const successMsg = document.getElementById("form-success");
if (form && successMsg) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (name === "") {
            alert("Please enter your name.");
            return;
        }
        if (!email.match(emailPattern)) {
            alert("Please enter a valid email.");
            return;
        }
        if (message === "") {
            alert("Please enter your message.");
            return;
        }
        successMsg.style.display = "block";
        form.reset();
        setTimeout(() => {
        successMsg.style.display = "none";
        }, 5000);
    });
}

const profileImg = document.getElementById('profile-img');
let clickCount = 0;
let clickTimeout;
if (profileImg) {
    profileImg.addEventListener('click', () => {
        clickCount++;
        clearTimeout(clickTimeout);
        if (clickCount === 3) {
            activateClickEasterEgg();
            clickCount = 0; 
        }
        clickTimeout = setTimeout(() => {
            clickCount = 0;
        }, 1500);
    });
}
function activateClickEasterEgg() {
    const badge = document.getElementById('secret-badge');
    profileImg.classList.add('spin-effect');
    setTimeout(() => {
    profileImg.classList.remove('spin-effect');
    }, 800);
    if (badge) {
        badge.style.bottom = '20px';
        setTimeout(() => {
        badge.style.bottom = '-200px';
        }, 4000);
    }
}