
//prototipo de persona
// que sabe decir su nombre y apellido

class Persona {
    constructor(nombre, apellido, altura){
        //constructor en otros lenguajes
        this.nombre = nombre //se crea el atributo nombre
        this.apellido = apellido //se crea el atributo apellido
        this.altura = altura
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto(){
        return this.altura > 1.8
    }
    //return this
    //en JS esta implicito que se retorna el onjeto generado.

}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre,apellido,altura) //primero se llama a super para usar el this

    }

    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
        if (fn) { // si la funciona tiene valor o si si nos la mandaron
            fn(this.nombre,this.apellido, false)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev){
        console.log(`No sabia que eras desarrollador`)
    }
}

//luego de llamar a la herencia pisamos el metodo saludar del prototipo Desarrollador
Desarrollador.prototype.saludar = function (fn){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
    if (fn) { // si la funciona tiene valor o si si nos la mandaron
        fn(this.nombre,this.apellido, true)
    }
}

//heredaDe(Desarrollador, Persona)

var sacha = new Persona('Sacha', 'Lifszyc',1.72) //NEW crea nuevos objetos
var erika = new Persona('Erika', 'Luna',1.65)
var arturo = new Desarrollador('Arturo', 'Martinez',1.89)

sacha.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)