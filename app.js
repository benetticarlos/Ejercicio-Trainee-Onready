/*  */

const arr = [
  {
    marca: "peugeot",
    modelo: "206",
    puertas: 4,
    precio: 200000.0,
  },

  {
    marca: "honda",
    modelo: "titan",
    cilindrada: "125cc",
    precio: 60000.0,
  },

  {
    marca: "peugeot",
    modelo: "208",
    puertas: 5,
    precio: 250000.0,
  },

  {
    marca: "yamaha",
    modelo: "YBR",
    cilindrada: "160cc",
    precio: 80500.5,
  },
];

console.log(arr);

/* Ordenamiento del array en base al precio de los vehículos */

const arrayPrecios = arr.sort(function (a, b) {
  if (a.precio > b.precio) {
    return 1;
  }
  if (a.precio < b.precio) {
    return -1;
  }
  return 0;
});

let masCaro = arrayPrecios.length - 1;

/* devolución por consola del vehículo mas caro y mas barato*/

console.log(
  "Vehículo mas caro: " + arr[masCaro].marca + " " + arr[masCaro].modelo
);

console.log("Vehículo mas barato: " + arr[0].marca + " " + arr[0].modelo);

/* bloque encargado de encontrar la letra 'Y' en los modelos */
const letraY = "Y";

const o = arr.find((elemento) => {
  return elemento.modelo.includes(letraY);
});

/* Vehículos que se les encontró la letra 'Y' en el modelo */
console.log(
  "Vehículo que contiene en el modelo la letra 'Y': " +
    o.marca +
    " " +
    o.modelo +
    " " +
    o.precio
);

console.log("Vehículos ordenados por precio de mayor a menor:");
for (const vehiculo of arrayPrecios.reverse()) {
  console.log(vehiculo.marca + " " + vehiculo.modelo);
}


