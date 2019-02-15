var contador = 0

const llueve = () => Math.random()< 0.25
//al menos se ejecuta una vez
do{
    contador++

}while (!llueve()) //mientra no llueva
if (contador === 1){console.log(`Fui a ver si llovia ${contador} vez`)}
else{console.log(`Fui a ver si llovia ${contador} veces`)}