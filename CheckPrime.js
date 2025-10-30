// check the given Number is prime or not 
function CheckPrime(InputNumber){
    if(InputNumber === 2 || InputNumber === 3){
        return `${InputNumber} is Prime number.`;
    }
    else{
        for(let i = 2; i <= Math.sqrt(InputNumber);i++){
            if(InputNumber % i === 0){
                return `${InputNumber} is not Prime number.`;
            }
            else{
                return `${InputNumber} is Prime number.`;
            }
        }
    }
}

let InputNumber = 59;
console.log(CheckPrime(InputNumber));