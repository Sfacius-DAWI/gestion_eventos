const estadoVentas = {
    totalCompras: 0,
    totalGanado: 0,
    totalVipVendidas:0,
    totalGeneralVendidas:0,
}

function descuentoValidator(descuento) {
    if (descuento !== "JSA24") {
        alert("Código de descuento inválido");
        return false;
    }
}

function calculoCompra( entradas, suplemento) {
    //entrada será un obj o array que tendrá la cantidad y el tipo de cada entrada
    // ["VIP#3", "General#4"]
    const precioVip = 50;
    const precioGeneral = 30;
    //el suplemento será un 10% del precio de la entrada
    const precioSuplementoVip = 5;
    const precioSuplementoGeneral = 3;
    let total = 0;

    entradas.forEach(entrada => {
        //divido la entrada en tipo y cantidad
        let [tipo, cantidad] = entrada.split("#");
        //paso la cantidad a número
        cantidad = parseInt(cantidad, 10);
        //límite de compra de 4
        if (cantidad > 4) {
            alert("Sólo se pueden comprar hasta 4 estradas por persona");
        }

        if (tipo === "VIP") {
            total += cantidad * precioVip;
            estadoVentas.totalVipVendidas += cantidad;
            if (suplemento) {
                total += cantidad * precioSuplementoVip;
            }
        } else if (tipo === "General") {
            total += cantidad * precioGeneral;
            estadoVentas.totalGeneralVendidas += cantidad;
            if (suplemento) {
                total += cantidad * precioSuplementoGeneral;
            }
        }
    });
    //el descuento será un 10% del total
    if (descuentoValidator()) {
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

    return total;
}