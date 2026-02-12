// Dark mode toggle

const btn = document.getElementById("darkModeBtn");

btn.addEventListener("click", () => {
document.body.classList.toggle("dark");
});
// Typing animation

const text = "I build modern, responsive and interactive web experiences.";
let index = 0;

function typingEffect(){
if(index < text.length){
document.getElementById("typing").innerHTML += text.charAt(index);
index++;
setTimeout(typingEffect,40);
}
}

typingEffect();


// Mouse interactive background

document.addEventListener("mousemove",(e)=>{

const shape = document.querySelector(".hero-shape");

let x = e.clientX / 50;
let y = e.clientY / 20;

shape.style.transform = `translate(${x}px, ${y}px)`;

});
