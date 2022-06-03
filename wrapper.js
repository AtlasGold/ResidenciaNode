
//console.log(number1(22))
//console.log(number2.porExtenso(33))


function wrapper(num){

    num = process.argv[2]
    const number1 = require('extenso')

    const number2 = require('numero-por-extenso');
    
    console.log( `${number2.porExtenso(num)} primeiro \n,${number1(num)} segundo `)
}


wrapper()