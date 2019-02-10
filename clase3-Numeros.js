var edad = 27

//edad=edad+1
edad += 1

var peso = 75

//peso = peso - 2
peso -= 2

var sandwich = 1
//peso = peso + sandwich
peso += sandwich

var jugarAlFutbol = 3

//peso = peso - jugarAlFutbol
peso -= jugarAlFutbol

var precioVino = 200.3
var total = precioVino * 3 
//es resultado 600.9000000000001 no es preciso
//para que sea mas preciso
var total = precioVino * 100 * 3 / 100
var total = Math.round(precioVino * 100 * 3) / 100

var totalStr = total.toFixed(2); //2 es la cantidad de decimales.

var total2 = parseFloat(totalStr)//para pasar de texto a decimal.

var pizza = 8
var persona = 2

var cantidadPorcionesPorPersona = pizza / persona
