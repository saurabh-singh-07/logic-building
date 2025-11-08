// check number is Armstrong number 

function CheckArmStrongNum(InputNumber){
    let Arr = [];
    let result = 0;
    while(InputNumber > 0){
        let lastDigit = InputNumber % 10;
        InputNumber = Math.floor(InputNumber / 10);
        Arr.push(lastDigit);
    }
    Arr.forEach(e =>{
        result = result + Math.pow(e, Arr.length);
    });
    return result;
}

console.log(CheckArmStrongNum(153))
