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
}else if(word == 'mil'){
    console.log(centenas.mil)
} //eu vou ter que sair 
// mega vontade de cagar 
//foda meu parceiro, hj eu vou ficar doidão de pinga
// vcs fiquem sobrios
//o pessoal n sei se ta cagando
// mas eu to quase
//licensa 
else if (word == 'milhão'|| 'word == milhões'){
    console.log(centenas.milhao)
}
else if(word == 'bilhão' || word == 'bilhões' ){
    console.log(centenas.bilhao)
}
else if(word == 'trilhão' || word == 'trilhões'){
    console.log(centenas.trilhao)
}
else if(word == 'quadrilhão' || word == 'quadrilhões'){
    console.log(centenas.quadrilhao)
}