var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}
var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}
var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}
var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}
var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}

var personas = [sacha, alan, martin, dario, vicky, paula]

//para filtrar se requieren dos cosas: ARRAY y CONDICION (sera un funciona)
//const esAlta = (persona) =>{
    //return persona.altura >= 1.76 //la condicion de es alta o no
//}

const esAlta = persona => persona.altura > 1.8 //arrow function
//const esAlta = ({altura}) => altura > 1.8 //arrow function

//filter hace una iteracion por nosotros de cada elemento del array y los pasa
//a la funcion condicion esAlta

var personasAltas = personas.filter(esAlta)

/*
var personasAltas = personas.filter(function(persona){
    return persona.altura>1.8
})
*/
console.log(personasAltas)

//TAREA: hacer el codigo para filtrar personas bajas
//El codigo sería:
const esBaja = persona => persona.altura < 1.8
var personasBajas = personas.filter(esBaja)
console.log(personasBajas)

//transformar arrays
const pasaAlturaACms = persona => ({ // aqio se genera un nuevo objeto para retornar
        ...persona,
        altura: persona.altura * 100  
})

var personasCms = personas.map(pasaAlturaACms)

//reduce array
//vamos a sacar la cuenta total de cuantos libros hay
var acum = 0
/*

for (var i=0; i < personas.length; i++){
    acum = acum + personas[i].cantidadDeLibros
}
*/
//reducir el array de personas a un Total
//se requiere la funcion y un valor inicial
const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros


var totaldeLibros = personas.reduce(reducer, 0)
console.log(`En total todos tienen ${totaldeLibros} libros`)