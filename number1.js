//funcionando ok
function wrapper(num){
 

    num = process.argv[2]
    const number1 = require('extenso');
                
    console.log(number1(num)) 

}

wrapper()