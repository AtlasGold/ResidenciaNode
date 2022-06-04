const centenas = require ("./cavaleiro_do_zodiaco/centenas_numeros.js");



let palavra = process.argv[2]


const word = palavra.toLocaleLowerCase().trim()

console.log(word)


if (word == `cem`){
console.log(centenas.cento)
}else if(word ==`duzentos`|| word ==`duzentas`){
    console.log(centenas.duzentos)
}else if(word =='trezentos' || word == `trezentas`){
    console.log(centenas.trezentas)
}else if(word ==`quatrocentos`|| word == `quatrocentas`){
    console.log(centenas.quatrocentos)
}else if(word =='quinhentos' || word == `quinhentas`){
    console.log(centenas.quinhentos)
}else if(word ==`seiscentos`|| word ==`seiscentas`){
    console.log(centenas.seiscentos)
}else if(word =='setecentos' || word == `setecentos` || word == `seticentos`){
    console.log(centenas.setecentos)
}else if(word ==`oitocentos`|| word ==`oitocentas`){
    console.log(centenas.oitocentos)
}else if(word =='novecentos' || word == `novecentas`){
    console.log(centenas.novecentos)
}

