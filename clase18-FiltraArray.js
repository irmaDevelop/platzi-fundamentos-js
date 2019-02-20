var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}
var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}
var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}
var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}
var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
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