/*"clickHandler" evento del paso 3°*/
/* function clickHandler(event) {
    event.preventDefault();
    const id = event.currentTarget.getAttribute('href').substring(1);
    /* ↓ esto es lo mismo que eso ↑; solo que por partes*/
// const elemento = event.currentTarget;
// const href = elemento.getAttribute('href');
//const id = href.substring(1);
/*console.log(id);
/*ocultamos todo menos el elemento del id correspondiente*/
/*for (let i = 0; i < contenidoido.length; i++) {
        contenidoido[i].style.display = 'none';
        if (contenidoido[i].getAttribute('id') = id) {
            contenidoido[i].style.display = 'block';
        }
    }
}*/
/*1° PASO: seleccionar los elementos con los que iremos a trabajar*/
const enlaces = document.querySelectorAll('.tabs-tablist-item');

const contenido = document.querySelectorAll('.tabs-contenidot-item');

/*2° PASO: ocultar los elementos que no queremos mostrar*/
/*for (let i = 0; i < contenidoido.length; i++) {
    contenidoido[i].style.display = 'none';
}

contenidoido[0].style.display = 'block';

/*3° PASO: eventos*/
/*for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].addEventListener('click', clickHandler);
}

/*SEGUNDA CLASE*/
for (let i = 0; i < contenido.length; i++) {
    contenido[i].classList.add('js-content-hidden');
}

contenido[0].classList.remove('js.active');
enlaces[0].classList.add('js-active');

for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].addEventListener('click', (event) => {
        event.preventDefault();
        const id = event.currentTarget.getAttribute('href').substring(1);
        console.log(id);
        //ocultamos todo menos el elemento con el id correcto.
        for (let i = 0; i < contenido.length; i++) {
            contenido[i].classList.add('js-content-hidden');
            if (contenido[i].getAttribute('id') == id) {
                contenido[i].classList.remove('js-content-hidden');
            }
        }
        for (let i = 0; i < enlaces.length; i++) {
            enlaces[i].classList.remove('js-active');
        }
        event.currentTarget.classList.add('js-active');
    });
}