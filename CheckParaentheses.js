// write a program that checks if a given string of parentheses is balanced and well-formed

const parentheses = {
    '{' : '}',
    '(' : ')',
    '[' : ']'
}
function IsBalenced(inputstring){
    const parenthesesArr = [];
    for(let char of inputstring){
        if(parentheses[char]){
            parenthesesArr.push(char);
        }else if(char === '(' || char === '{' || char === '['){
            const lastopeningParanthesis = parenthesesArr.pop();
            if(parentheses[lastopeningParanthesis] !== char){
                return false;
            }
        }
    }
    if(parenthesesArr.length === 0){
        return true;
    }
    return true;
}

console.log(IsBalenced("{[()}}"))