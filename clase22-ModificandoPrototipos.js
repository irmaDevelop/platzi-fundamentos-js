//prototipo de persona
// que sabe decir su nombre y apellido

function Persona(nombre, apellido, altura){
    //constructor en otros lenguajes
    console.log('Me ejecutaron')
    this.nombre = nombre //se crea el atributo nombre
    this.apellido = apellido //se crea el atributo apellido
    this.altura = altura
    //return this
    //en JS esta implicito que se retorna el onjeto generado.
}

Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function(){
    return this.altura > 1.7
}

var sacha = new Persona('Sacha', 'Lifszyc',170) //NEW crea nuevos objetos
//al objeto sacha se asigna el prototipo Persona

var erika = new Persona('Erika', 'Luna',175)
var arturo = new Persona('Arturo', 'Martinez',165)

sacha.saludar()
sacha.soyAlto()