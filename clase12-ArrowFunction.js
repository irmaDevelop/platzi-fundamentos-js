var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 13

}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)

    if (persona.ingeniero){
        console.log('Ingeniero')
    }else{
        console.log('No es Ingeniero')
    }
    
    if (persona.cocinero){
        console.log('Cocinero')
    }

    if (persona.cantante){
        console.log('Cantante')
    }

    if (persona.dj){
        console.log('Dj')
    }
    if (persona.guitarrista){
        console.log('Guitarrista')
    }

    if (persona.drone){
        console.log('Vuela Drone')
    }

}

const MAYORIA_DE_EDAD = 18

//de estamanera tenemos un a funcion anónima
//const esMayorDeEdad = function (persona){
//const esMayorDeEdad = (persona) => {
//se puede obviar parentesis si es un parametro
/*
const esMayorDeEdad = persona => {
    return persona.edad >= MAYORIA_DE_EDAD
}
*/
//le coloca const para que trabaje como funcion
//Ya que la funcion solo retorna algo 
//y no hace nada mas se obvia {} y return
//const esMayorDeEdad = persona =>  persona.edad >= MAYORIA_DE_EDAD
// desestructura el parametro de persona
const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD
const esMenorDeEdad = ({edad}) => !esMayorDeEdad({edad})


function imprimirSiEsMayorDeEdad(persona){
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

function permitirAcceso(persona){
    if (esMenorDeEdad(persona)){
        console.log('ACCESO DENEGADO')
    }
}

imprimirProfesiones(sacha)
imprimirSiEsMayorDeEdad(sacha)
imprimirSiEsMayorDeEdad(juan)