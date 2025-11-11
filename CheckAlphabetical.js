// write a program to check alphabetical order 

function isStringAlphabeticOrder(InputString){
    for(let i = 0; i < InputString.length; i++){
        if(InputString[i] > InputString[i + 1]){
            return false;
        }
    }
    return true;
}

const string = isStringAlphabeticOrder("acfgjns");
console.log(string);