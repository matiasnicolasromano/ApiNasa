//PARA OBTENER LAS ULTIMAS IMAGENES DEL DIA CON LA API DE LA NASA

window.addEventListener('load',obtenerDatos);

function obtenerDatos(){

    const Nasa_key = 'tAQB3KRFhTsUhvfNiwYl7X20SP0LwsH17EeNpgvp';
    const ruta = `https://api.nasa.gov/planetary/apod?api_key=${Nasa_key}`;
   
    fetch(ruta)
    .then(respuesta => respuesta.json())
    .then(resultado => mostrarDatos(resultado))

}

function mostrarDatos({date, explanation, media_type, title, url}){

    const titulo = document.querySelector('#titulo');
    titulo.innerHTML = title;
    const fecha = document.querySelector('#fecha');
    fecha.innerHTML = date;
    const descripcion = document.querySelector('#descripcion');
    descripcion.innerHTML = explanation;

    const multimedia = document.querySelector('#foto_del_dia');
    if (media_type == 'video') {
        multimedia.innerHTML = `
        <iframe class="embed-responsive-item" style="height: 500px; width: 80%" src="${url}" allowfullscreen></iframe>
     `;
    } else {
        multimedia.innerHTML = `<img src="${url}" class="img-fluid" alt="${url}">`;
    }

}