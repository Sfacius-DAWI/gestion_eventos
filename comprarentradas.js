import {conciertos} from './conciertos.js'; 

function comprarentradas(){
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let email = document.getElementById("email").value;
    let edad = document.getElementById("edad").value;
    let dni = document.getElementById("dni").value;
    let genero = document.getElementById("genero").value;
    let cantidad_entradas = document.getElementById("cantidad_entradas").value;
    // cantidad entrdas y tipo, precio
    // descuentos 
    let cliente = {
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        edad: edad,
        dni: dni,
        genero: genero,
        descuento: null,
    }
    if (edad < 18){
        cliente.descuento = true
        return;
    }

    else {
        cliente.descuento = false
    }


    if (nombre === 'melendi'){
        return {
            nombre: cliente.nombre,
            apellidos: cliente.apellidos,
            email: cliente.email,
            edad: cliente.edad,
            dni: cliente.dni,
            genero: cliente.genero,
            descuento: cliente.descuento,
            numero_entradas: cantidad_entradas,
            artista: conciertos[0].artista,
            lugar: conciertos[0].lugar,
            fecha: conciertos[0].fecha,
            limite_entradas: conciertos[0].limite_entradas,
            cancelable: conciertos[0].cancelable,
        }
    }


}