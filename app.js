let panels = document.querySelectorAll('.panel');
console.log(panels);

panels.forEach((panel) => {
    panel.addEventListener('click', function(){
        let aux = panel.classList.contains('active');
        if(aux==false){
            panel.classList.add('active');
        }
        else{
            panel.classList.remove('active');
        }
    })
})