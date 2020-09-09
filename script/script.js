/*"clickHandler" evento del paso 3°*/
function clickHandler(event) {
    event.preventDefault();
    const id = event.currentTraget.getAttribute('href').substring(1);
    /* ↓ esto es lo mismo que eso ↑; solo que por partes*/
    // const elemento = event.currentTarget;
    // const href = elemento.getAttribute('href');
    //const id = href.substring(1);
    console.log(id);
    /*ocultamos todo menos el elemento del id correspondiente*/
    for (let i = 0; i < contenido.length; i++) {
        contenido[i].style.display = 'none';
        if (contenido[i].getAttribute('id') = id) {
            contenido[i].style.display = 'block';
        }
    }
}

/*1° PASO: seleccionar los elementos con los que iremos a trabajar*/
const enlaces = document.querySelectorAll('.tabs-tablist-item');

const contenido = document.querySelectorAll('.tabs-content-item');

/*2° PASO: ocultar los elementos que no queremos mostrar*/
for (let i = 0; i < contenido.length; i++) {
    contenido[i].style.display = 'none';
}

contenido[0].style.display = 'block';

/*3° PASO: eventos*/
for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].addEventListener('click', clickHandler);
}