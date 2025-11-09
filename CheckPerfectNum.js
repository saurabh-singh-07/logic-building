// write a program that checks if a given number is a perfect numbers

function CheckPerfectNums(InputNumber){
    let result = 0;
    for (let i = 0; i <= InputNumber/2; i++){
        if(InputNumber % i == 0){
            result = result + i;
        }
    }
    if(result === InputNumber){
        return true;
    }
    else{
        return false;
    }
}
const number = 496;
console.log(CheckPerfectNums(number));
