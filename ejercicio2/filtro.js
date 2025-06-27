
const palabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];

const formFiltro = document.getElementById('formFiltro');
const textoFiltro = document.getElementById('textoFiltro');
const error = document.getElementById('error');
const listaPalabras = document.getElementById('listaPalabras');

function mostrarLista(lista) {
  listaPalabras.innerHTML = '';
  lista.forEach(palabra => {
    const li = document.createElement('li');
    li.textContent = palabra;
    listaPalabras.appendChild(li);
  });
}


mostrarLista(palabras);


formFiltro.addEventListener('submit', function(e) {
  e.preventDefault(); 

  const texto = textoFiltro.value.trim();


  if (texto === '') {
    error.textContent = 'Por favor, ingresa algún texto para filtrar.';
    listaPalabras.innerHTML = ''; 
    return;
  }


  if (/\d/.test(texto)) {
        error.textContent = 'El texto no debe contener números.';
        listaPalabras.innerHTML = ''; 
        return;
 }


  error.textContent = ''; 

 
  const resultado = palabras.filter(palabra =>
    palabra.toLowerCase().includes(texto.toLowerCase())
  );

  if (resultado.length === 0) {
    listaPalabras.innerHTML = '<li>No se encontraron coincidencias.</li>';
  } else {
    mostrarLista(resultado);
  }
});
