var signo=prompt('Cual es tu signo')
console.log(signo)

switch (signo){
    case 'acuario':
        console.log('Trabajo y negocios: avanza con firmeza y no duda en hacer cambios drásticos. Multiplica beneficios. Amor: su belleza se destaca más que nunca y a su paso, genera propuestas atractivas.')
        break

    case 'aries':
        console.log('​Trabajo y negocios: avanza con firmeza y no duda en hacer cambios drásticos. Multiplica beneficios. Amor: su belleza se destaca más que nunca y a su paso, genera propuestas atractivas.')
        break
    case 'tauro':
        console.log('​Trabajo y negocios: actúa de modo poco convencional y los demás se sienten desorientados. Ya comprenderán. Amor: descubrirá que alguien que le atrae posee compromiso; mejor, relajarse.')
        break
    case 'geminis':
    case 'géminis':
        console.log('Trabajo y negocios: encuentros frustrantes o cancelaciones sobre la hora; se avecina etapa próspera. Amor: aunque tenga la última palabra en todo, no evitará los conflictos.')
        break
    case 'cancer':
        console.log('Trabajo y negocios: su intuición le indicará que una buena oportunidad llega hoy. No la deje pasar. Amor: la situación íntima dará un vuelco; se producirán cambios y todo estará mejor.')
        break
    case 'leo':
        console.log('​Trabajo y negocios: las condiciones serán muy ventajosas. Evite el exceso de confianza; sea prudente. Amor: un conflicto de la pareja se reabre por una promesa incumplida; es hora de reflexionar.')
        break
    case 'virgo':
        console.log('​Trabajo y negocios: estará benevolente con su entorno pero igual les exigirá el trabajo bien hecho. Amor: terceros entrometidos crean confusión pero los pondrá lejos con energía.')
        break
    case 'libra':
        console.log('​Trabajo y negocios: vive el día con buen humor y ello da confianza a su entorno. Alcanza sus metas. Amor: enfrenta las adversidades con éxito mientras quien menos imagina le espera.')
        break
    case 'escorpio':
        console.log('​Trabajo y negocios: los impulsos no le llevarán a algo positivo. Lo simple se volverá complicado. Amor: una casual atracción se convertirá en el romance que espera hace tiempo.')
        break
    case 'sagitario':
        console.log('​Trabajo y negocios: enfrentará situaciones que desafían su fortaleza. Se avecinan cambios drásticos. Amor: la felicidad de la pareja dependerá de que ignore a relaciones anteriores.')
        break
    case 'capricornio':
        console.log('Trabajo y negocios: alguien pondrá trabas a su obstinado avance pero su estrategia tendrá éxito. Amor: un malentendido le hará pasar por descortés; será un desafío subsanarlo.')
        break
    case 'piscis':
        console.log('Trabajo y negocios: no le temblará el pulso para hacer cambios drásticos. Sus logros materiales crecerán. Amor: las brasas de la pareja volverán a encenderse si le da un lugar a la ternura.')
        break
    default:
        console.log('no es un signo del zodiaco')
        break
}
