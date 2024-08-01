let frutas = ["naranja", "banana"];
frutas.push ("manzana");
console.log (frutas);

let paises = ["Ecuador", "Colombia", "Peru"];
paises.pop();
console.log (paises);

let colores = ["amarillo", "azul", "rojo"];
colores.shift();
console.log (colores);

let ciudades = ["Madrid", "Barcelona", "Teruel"];
ciudades.unshift("Munich");
console.log (ciudades);

let frutasconJ = frutas.filter(fruta => fruta.includes("j"));
console.log (frutasconJ);

let animales = ["jirafa","elefante","lobo"];
let animales2 = ["aves","culebra","monos"];
let todoslosAnimales = animales.concat(animales2);
console.log (todoslosAnimales);

let helados = ["chocolate","vainilla","limon", "fresa", "menta"];
helados.reverse();
console.log(helados);

let marcas = ["samsung", "motorola", "iphone"];
marcas.sort();
console.log(marcas);