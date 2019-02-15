var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
}

var dario = {
    nombre: 'Darío',
    apellido: 'Susnisky',
    edad: 27
}

function imprimirNombreEnMayusculas(persona){
    // var nombre = persona.nombre es lo mismo que:
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}

function imprimirNombreYEdad(persona){
    var {nombre, edad} = persona
    console.log(`Hola me llamo ${nombre} y mi edad es ${edad}`)
}

//funcion actualiza el objeto definido de manera global
function cumpleanos(persona){
    persona.edad += 1

}

//funcion puede devolver un nuevo objeto
function cumpleanos1(persona){
    return {
        //se pueden agregar campos tambien.
        ...persona, //nuevo objeto persona mas vieja
        edad: persona.edad + 1
    }
}


imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario) 
//imprimirNombreEnMayusculas({nombre: 'Pepito'})

imprimirNombreYEdad(sacha)
imprimirNombreYEdad(dario)
