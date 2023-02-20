const details = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");
const circle = document.querySelector(".circle")

details.addEventListener('click', ()=>{
    container.classList.add("active");
    circle.classList.add("active-circle");
})

close.addEventListener('click', ()=>{
    container.classList.remove("active");
    circle.classList.remove("active-circle");
})