
//console.log(number1(22))
//console.log(number2.porExtenso(33))


function wrapper(num){

    const number1 = require('extenso')

    const number2 = require('numero-por-extenso');
    
    return number1(num), number2.porExtenso(num)
}


console.log(wrapper())