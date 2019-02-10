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

//se puede indicar en funcion que recibi solo
//un atributo del objeto 'nombre' en este caso
function imprimirNombreEnMayusculas({ nombre }){
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario) 
imprimirNombreEnMayusculas({nombre: 'Pepito'})

//siguiente linea da error ya que al desglosar,
//se establece que se debe ingresar un nombre
//TypeError: Right side of assignment cannot be destructured
//imprimirNombreEnMayusculas()
