let conciertos = [
  {
    artista: "melendi",
    lugar: "palacio vistaalegre",
    fecha: new Date("2024-11-12T00:00:00"),
    limite_entradas: 1000,
    cancelable: true,
  },
  {
    artista: "ac/dc",
    lugar: "palacio vistaalegre",
    fecha: new Date("2026-07-17T00:00:00"),
    limite_entradas: 20000,
    cancelable: true,
  },
  {
    artista: "estopa",
    lugar: "palacio vistaalegre",
    fecha: new Date("2025-12-11T00:00:00"),
    limite_entradas: 700,
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
  } else if (artista === "ac/dc") {
    return {
      nombre: cliente.nombre,
      apellidos: cliente.apellidos,
      email: cliente.email,
      edad: cliente.edad,
      dni: cliente.dni,
      genero: cliente.genero,
      descuento: cliente.descuento,
      numero_entradas: cantidad_entradas,
      artista: conciertos[1].artista,
      lugar: conciertos[1].lugar,
      fecha: conciertos[1].fecha,
      limite_entradas: conciertos[1].limite_entradas,
      cancelable: conciertos[1].cancelable,
    };
  } else if (artista === "estopa") {
    return {
      nombre: cliente.nombre,
      apellidos: cliente.apellidos,
      email: cliente.email,
      edad: cliente.edad,
      dni: cliente.dni,
      genero: cliente.genero,
      descuento: cliente.descuento,
      numero_entradas: cantidad_entradas,
      artista: conciertos[2].artista,
      lugar: conciertos[2].lugar,
      fecha: conciertos[2].fecha,
      limite_entradas: conciertos[2].limite_entradas,
      cancelable: conciertos[2].cancelable,
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
  document.getElementById("respuesta").innerHTML +=
    "Total: " + total + " €<br>";
}

function calcularDiasRestantes() {
  const comprarEntradas = comprarentradas();

  const fechaConcierto = new Date(comprarEntradas.fecha);
  const hoy = new Date();
  let diasRestantes = Math.floor(
    (fechaConcierto.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24)
  );

  document.getElementById("respuesta").innerHTML +=
    "Días restantes: " + diasRestantes + "<br>";
}

function crearDescripcion() {
  const comprarEntradas = comprarentradas();

  let partesFecha = comprarEntradas.fecha.split("-");
  let fecha = new Date(partesFecha[2], partesFecha[1] - 1, partesFecha[0]);

  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  let fechaFormateada = `${fecha.getDate()} de ${
    meses[fecha.getMonth()]
  } de ${fecha.getFullYear()}`;

  document.getElementById("respuesta").innerHTML +=
    "Descripción: Concierto de " +
    comprarEntradas.artista +
    " en " +
    comprarEntradas.lugar +
    " el " +
    fechaFormateada +
    "<br>";
}

async function programarNotificación(tiempo, artista) {
  const hora_minutos = tiempo.split(":");
  const hora = hora_minutos[0];
  const minutos = hora_minutos[1];

  const tiempoActual = new Date();
  const notificaciónHora = new Date();

  notificaciónHora.setHours(hora);
  notificaciónHora.setMinutes(minutos);
  notificaciónHora.setSeconds(0);
  notificaciónHora.setMilliseconds(0);

  const tiempoRestante = notificaciónHora - tiempoActual;

  while (tiempoRestante > 0) {
    if (tiempoRestante <= 300000) { // Menos de 5 minutos
      await new Promise((resolve) => setTimeout(resolve, tiempoRestante));
      alert(`Tu concierto de ${artista} está por comenzar.`);
      break;
    } else {
      await new Promise((resolve) => setTimeout(resolve, 300000)); // Espera 5 minutos
      tiempoRestante = notificaciónHora - new Date();
    }
  }
  }


function checkbox () {
  let checkbox = document.getElementById("recordatorio_dia");
  if (checkbox.checked) {
  
  } else {
    document.getElementById("entradas_vip").value = 0;
    document.getElementById("entradas_general").value = 0;
  }
}


async function Enviar() {
  document.getElementById("respuesta").innerHTML = "";
  calculoCompra();
  calcularDiasRestantes();
  crearDescripcion();
  await tiempo_limite();
}
