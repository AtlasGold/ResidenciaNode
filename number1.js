//funcionando ok

function one(num){
    num = process.agrv[2]


    const number1 = require('extenso');
                
    console.log(number1(num)) 

}

one()

module.exports = one;