// write a program to build an Interactive Basic Calculator
const prompt = require('prompt-sync')();

let Operation = prompt(`Please select one of the below options 
=> Press 1 for Addition  
=> Press 2 for Subtraction
=> Press 3 for Multiplication
=> Press 4 for Division : `);
Operation = parseInt(Operation);

let FirstNumber = prompt(`Enter the 1st Number :`);
FirstNumber = parseInt(FirstNumber);
let SecondNumber = prompt(`Enter the Second Number :`);
SecondNumber = parseInt(SecondNumber);
function Calcutator(Operation, FirstNumber, SecondNumber){
    let result;
    switch(Operation){
        case 1:
            console.log("Addition");
            result = FirstNumber + SecondNumber;            
            break;
        case 2:
            console.log("Subtraction");
            result = FirstNumber - SecondNumber;           
            break;
        case 3:
            console.log("Multiplication");
            result = FirstNumber * SecondNumber;     
            break;
        case 4:
            console.log("Division");
            result = FirstNumber / SecondNumber;
            break;
        default:
            console.log("please choose valid Operation");
            break;    
    }
    console.log(result);
}

Calcutator(Operation, FirstNumber, SecondNumber);