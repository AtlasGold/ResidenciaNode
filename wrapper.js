

function wrapper(num){
 

        num = process.argv[2]
        const number1 = require('extenso');

        const number2 = require('numero-por-extenso');

        //eks
        const number3 = require('numero-por-extenso');

        const number4 = require('number-to-words');

        const number5 = require('num2Word');

        const number6 = require('amount-to-words');

        //number6 
        

        const number7 = require('num2words');

        const number8 = require('num-words-de');
                    
        console.log(number1(num)) //ok
        console.log(number2.porExtenso(num)) //ok
        console.log(number3.porExtenso(num)) //ok
        console.log(number4.toWords(num)) //ok
        console.log(number5(num)) //ok

        console.log(number8.numToWord(num))//ok

        //console.log(numberToWords(num)) numero6
        //console.log(number7.numToWords(num))

}

wrapper()