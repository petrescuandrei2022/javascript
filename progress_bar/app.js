const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const progress = document.querySelector('.progress');
const circles = document.querySelectorAll('.circle')
let active = 1;

next.addEventListener('click', () => {
    active++;
    if(active>circles.length){
        active=5;
    }

    update();
})

prev.addEventListener('click', () => {
    active--;
    if(active<1){
        active=1;
    }

    update();
})

function update(){
    circles.forEach((circle, idx) => {
        if(idx<active){
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active');
        }
    });
    progress.style.width = (active-1) * 25 + '%' 
}