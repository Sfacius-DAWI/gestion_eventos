import {conciertos} from './conciertos.js'; 

function comprarentradas(){
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let email = document.getElementById("email").value;
    let edad = document.getElementById("edad").value;
    let dni = document.getElementById("dni").value;
    let genero = document.getElementById("genero").value;

    if (edad < 18){
        alert("No puedes comprar entradas si eres menor de edad");
        return;
    }
    if (nombre === 'melendi'){
        return {
            nombre:nombre,
            dni:dni,
            artista: "melendi",
            lugar: "palacio vistaalegre",
            fecha: "12-12-2020",
            cliente: true,
            menores: true,

        }
    }


}