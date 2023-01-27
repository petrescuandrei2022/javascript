  const searchButton = document.querySelector('.search')
  const newButton = document.querySelector('.new');
  const img = document.querySelector('img')

  function getGif(){
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=P1MxI1xtPJemZrEd8S4vIKmxaKzWolX8&s=dog', {mode: 'cors'})
    .then(function(response) {
      return response.json()
    })
    .then(function(response) {
      img.src = response.data.images.original.url
    })
    .catch(e => {
      console.log(e)
    })
  }

  function search(){
    let searchTerm = document.getElementById("kw").value;
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=P1MxI1xtPJemZrEd8S4vIKmxaKzWolX8&s='+searchTerm, {mode: 'cors'})
    .then(function(response) {
      return response.json()
    })
    .then(function(response) {
      img.src = response.data.images.original.url
    })
    .catch(e => {
      console.log(e)
    })
  }

  window.onload = getGif();
  newButton.addEventListener('click', getGif);
  searchButton.addEventListener('click',search);
