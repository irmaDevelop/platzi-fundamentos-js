var nombre = 'Irma', apellido = 'Dávila'

var nombreEnMayuscula = nombre.toUpperCase()
var apellidoEnMinuscula = apellido.toLowerCase()

var primeraLetraNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = nombre + ' ' + apellido
//interpolar variables

var nombreCompeto = `${nombre} ${apellido.toUpperCase()}`

var str = nombre.charAt(1) + nombre.charAt(2)
var str = nombre.substr(1,3) //2 cantidad de caracteres

var theLast = nombre.substr(nombre.length -1,1)