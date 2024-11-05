let conciertos = [
{
    artista: "melendi",
    lugar: "palacio vistaalegre",
    fecha: "12-12-2020",
    limite_entradas: 1000,
    cancelable: true,
}
]

    function comprarentradas(){
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let email = document.getElementById("email").value;
    let edad = document.getElementById("edad").value;
    let dni = document.getElementById("dni").value;
    let genero = document.getElementById("genero").value;
    let entradas_vip = document.getElementById("entradas_vip").value;
    let entradas_general = document.getElementById("entradas_general").value;
    let cantidad_entradas = { entradas_vip: entradas_vip, entradas_generales: entradas_general };
    let suplemento = document.getElementById("suplemento").value;


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
            suplemento: suplemento,
        }
    }

}
function getconciertos(nombre){
    if (conciertos[0].artista === nombre){
        return {
            artista: conciertos[0].artista,
            lugar: conciertos[0].lugar,
            fecha: conciertos[0].fecha,
            limite_entradas: conciertos[0].limite_entradas,
            cancelable: conciertos[0].cancelable,
        }
    }
    }

    function tiempo_limite (){

        setTimeout(() => {
            alert("Tiempo acabado");
        }, 2 * 60 * 1000); // 2 minutos en milisegundos
    
    }


