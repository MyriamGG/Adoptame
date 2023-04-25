/* Función que suma o resta días a una fecha, si el parámetro
   días es negativo restará los días*/
   const sumarDias = (fecha, dias) => {
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }

  module.exports = sumarDias;