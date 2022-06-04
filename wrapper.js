function wrapper(num){
 

        num = process.argv[2]
        const number1 = require('extenso');

        const number2 = require('numero-por-extenso');

        const number3 = require('number-to-words');


        
        
                    
        console.log(number1(num)) 
        console.log(number2.porExtenso(num))
        console.log(number3.toWords(num))
   

}

wrapper()