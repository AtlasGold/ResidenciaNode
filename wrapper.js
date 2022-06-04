function wrapper(num){
 

        num = process.argv[2]
        const number1 = require('extenso');

        const number2 = require('numero-por-extenso');

        const number3 = require('number-to-words');

        //const number4 = require('n-extenso');
        
        const number5 = require('num2Word');

        
                    
        console.log(number1(num)) 
        console.log(number2.porExtenso(num))
        console.log(number3.toWords(num))
        //console.log(number4.nextenso(num))
        console.log(number5(num))
   

}

wrapper()