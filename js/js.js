var grupoTarjeta =["🐩","🐑"];
var grupoTarjeta1 =["🐩","🐑"];
console.log(grupoTarjeta);

/*Buscar Valor*/

grupoTarjeta.includes();
console.log(grupoTarjeta.includes("e"));

/*Sumar array*/

var todasTarjetas=grupoTarjeta+grupoTarjeta1;

console.log(todasTarjetas);

/*suma arrays conservando su propiedad*/

var totalTarjetas = grupoTarjeta.concat(grupoTarjeta1);
console.log(totalTarjetas);

/*conocer la amplitud de una matriz*/

console.log(grupoTarjeta.length);

/*agregar valores en un array*/
console.log(grupoTarjeta.push("hey"));
console.log(grupoTarjeta);

/*arrays anidados*/
var an=[
	
	["🐩","🐑"],
	["🐩","🐑"]
];
console.log(an);

/*como acceder a la matriz*/

console.log(" Ejemplo " +an[0]);
console.log(an[0][1 ]);