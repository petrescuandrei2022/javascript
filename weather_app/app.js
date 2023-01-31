let cName = document.getElementById('name');
let cTemp = document.getElementById('temp');
let city = 'Bucharest';
let search = document.getElementById('search');
let search_bar = document.getElementById('search-bar');
let target = document.getElementById('sCity');


function wSearch(){
  search_bar.style.transform="translateY(-2.1rem)";
  search.style.transform="translateY(-2.1rem)";
  city = search_bar.value;
  document.body.style.backgroundImage = "url('https://source.unsplash.com/1920x1080/?" + city + "')";
  document.body.style.backgroundRepeat='no-repeat';
  document.body.style.backgroundRepeat= 'auto';
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4d3d913f8049f18962d6bf9b084c646e`,{mode: 'cors'})
  .then(function(response){
  return response.json();
  })
  .then(function(response){
  cName.innerHTML=response.name;
  cTemp.innerHTML=Math.round(response.main.temp - 273.15) + '°C'
  })
}

search.addEventListener("click", function () {
  wSearch();
});

      
  
