
var x = 4, y = '4'

var sacha = {
    nombre: 'Sacha'
}

var otraPersona = {
    nombre: 'Sacha'
}

var ootraPersona = sacha

//siempre que podamos utilicemos el triple igual
function compara (a,b){
    if (a == b){
        console.log (`${a} es igual a ${b}`)
        if (a === b){
            console.log (` además ${a} es del mismo tipo que ${b}`)
        }else {
            console.log (` pero ${a} no es del mismo tipo que ${b}`)
        }
    }else{
        console.log (`${a} no es igual a ${b}`)
    }
}

compara(x,y)
