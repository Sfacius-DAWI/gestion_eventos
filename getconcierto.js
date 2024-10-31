import { conciertos } from './conciertos.js';
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