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
    let artista = document.getElementById("artista").value;


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

    if (artista === 'melendi'){
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

const estadoVentas = {
    totalCompras: 0,
    totalGanado: 0,
    totalVipVendidas:0,
    totalGeneralVendidas:0,
}

function descuentoValidator(comparEntradas) {
    if (comparEntradas.descuento !== "JSA24") {
        alert("Código de descuento inválido");
        return false;
    }
}

function calculoCompra (){

    const comprarEntradas = comprarentradas();
    //entrada será un obj o array que tendrá la cantidad y el tipo de cada entrada
    // ["VIP#3", "General#4"]
    const precioVip = 50;
    const precioGeneral = 30;
    //el suplemento será un 10% del precio de la entrada
    const precioSuplementoVip = 5;
    const precioSuplementoGeneral = 3;
    let total = 0;

    comprarEntradas.numero_entradas.forEach(entrada => {
        //divido la entrada en tipo y cantidad
        let [tipo, cantidad] = comprarEntradas.numero_entradas.split("#");
        //paso la cantidad a número
        cantidad = parseInt(cantidad, 10);
        //límite de compra de 4
        if (cantidad > 4) {
            alert("Sólo se pueden comprar hasta 4 estradas por persona");
        }

        if (tipo === "VIP") {
            total += cantidad * precioVip;
            estadoVentas.totalVipVendidas += cantidad;
            if (comprarEntradas.suplemento) {
                total += cantidad * precioSuplementoVip;
            }
        } else if (tipo === "General") {
            total += cantidad * precioGeneral;
            estadoVentas.totalGeneralVendidas += cantidad;
            if (comprarEntradas.suplemento) {
                total += cantidad * precioSuplementoGeneral;
            }
        }
    });
    //el descuento será un 10% del total
    if (descuentoValidator(comprarEntradas)) {
        total -= total * 0.1;
    }

    estadoVentas.totalCompras += 1;
    estadoVentas.totalGanado += total;
    //límite de capacidad de 100 entradas generales y 20 VIP
    if (estadoVentas.totalGeneralVendidas > 100) {
        alert("No quedan entradas generales disponibles");
    }

    if (estadoVentas.totalVipVendidas > 20) {
        alert("No quedan entradas VIP disponibles");
    }

    //return total;
}
