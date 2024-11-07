let conciertos = [
  {
    artista: "melendi",
    lugar: "palacio vistaalegre",
    fecha: "12-12-2020",
    limite_entradas: 1000,
    cancelable: true,
  },
];

function comprarentradas() {
  let nombre = document.getElementById("nombre").value;
  let apellidos = document.getElementById("apellidos").value;
  let email = document.getElementById("email").value;
  let edad = document.getElementById("edad").value;
  let dni = document.getElementById("dni").value;
  let genero = document.getElementById("genero").value;
  let entradas_vip = parseInt(
    document.getElementById("entradas_vip").value,
    10
  );
  let entradas_general = parseInt(
    document.getElementById("entradas_general").value,
    10
  );
  let cantidad_entradas = {
    entradas_vip: entradas_vip,
    entradas_generales: entradas_general,
  };
  let artista = document.getElementById("artista").value;
  let descuento = document.getElementById("descuento").value;

  let cliente = {
    nombre: nombre,
    apellidos: apellidos,
    email: email,
    edad: edad,
    dni: dni,
    genero: genero,
    descuento: descuento,
  };

  if (artista === "melendi") {
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
    };
  }
}
function getconciertos(nombre) {
  if (conciertos[0].artista === nombre) {
    return {
      artista: conciertos[0].artista,
      lugar: conciertos[0].lugar,
      fecha: conciertos[0].fecha,
      limite_entradas: conciertos[0].limite_entradas,
      cancelable: conciertos[0].cancelable,
    };
  }
}

function tiempo_limite() {
  setTimeout(() => {
    alert("Tiempo acabado");
  }, 2 * 60 * 1000); // 2 minutos en milisegundos
}

const estadoVentas = {
  totalCompras: 0,
  totalGanado: 0,
  totalVipVendidas: 0,
  totalGeneralVendidas: 0,
};

function descuentoValidator(descuento) {
  if (descuento !== "JSA24") {
    alert("Código de descuento inválido");
    return false;
  }
}

function calculoCompra() {
  const comprarEntradas = comprarentradas();
  //entrada será un obj o array que tendrá la cantidad y el tipo de cada entrada
  // ["VIP#3", "General#4"]
  const precioVip = 50;
  const precioGeneral = 30;
  let total = 0;

  const vip = comprarEntradas.numero_entradas.entradas_vip;
  const general = comprarEntradas.numero_entradas.entradas_generales;
  if (vip + general > 4) {
    alert("Sólo se pueden comprar hasta 4 entradas por persona");
  }

  total += vip * precioVip;
  estadoVentas.totalVipVendidas += vip;

  total += general * precioGeneral;
  estadoVentas.totalGeneralVendidas += general;

  //el descuento será un 10% del total

  if (comprarEntradas.descuento != "") {
    if (comprarEntradas.descuento !== "JSA24") {
      alert("Código de descuento inválido");
    } else {
      total -= total * 0.1;
    }
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
  document.getElementById("respuesta").innerHTML = total;
}
