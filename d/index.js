const fecha = 11;
const mes = 'mayo';
const anio = 1994;
const de = " de ";
const numFav = 27;
const body = document.querySelector('.app');
const titulo = document.createElement('h1');
const parrafo = document.createElement('h3');

titulo.innerHTML = fecha + de + mes + de + anio;
parrafo.innerHTML = "numero favorito " + numFav ;

body.appendChild(titulo);
body.appendChild(parrafo);
