const fecha = "11";
const mes = 'mayo';
const de = " de "
const body = document.querySelector('.app');
const titulo = document.createElement('h1');

titulo.innerHTML = fecha + de + mes;

body.appendChild(titulo);

