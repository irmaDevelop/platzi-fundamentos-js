var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
    peso: 75
}

console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso} kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const disminuirDePeso = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = sacha.peso - 3
var dias = 0

while (sacha.peso > META){

    if(comeMucho()){
        //aumenta de peso
        aumentarDePeso(sacha)
    }
    if(realizaDeporte()) {
        //adelagazar
        disminuirDePeso(sacha)

    }
    dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${sacha.nombre} bajó 3kg`)