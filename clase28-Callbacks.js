const API_URL='https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

//const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = { crossDomain: true}

//callback: es una funcionque se va a ejecutar
//en algun futuro, no sabemos cuando pero get lo llamará

//se ejecuta solo si el request es exitoso
onPeopleResponse = function(persona){
    //console.log(arguments)
    console.log(`Hola soy ${persona.name}`)
}

function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url , opts, function(persona){
        //console.log(arguments)
        console.log(`Hola soy ${persona.name}`)

        if (callback){
            callback()
        }

    })
}
//se ejecutan metodos asincronicos y es imposible saber
//en que orden nos llegaran las respuestas
obtenerPersonaje(1, function(){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3, function(){
            obtenerPersonaje(4, function(){
                obtenerPersonaje(5, function(){
                    obtenerPersonaje(6, function(){
                        obtenerPersonaje(7)
                    })
                })
            })
        })
    })
})



