// write a program that checks if two given string are amagrams of each other 

function CheckAnagram(Inputstring1 , Inputstring2){
    if(Inputstring1.length !== Inputstring2.length){
        return false;
    }
    const charsInputstring1 = {};
    for(let char of Inputstring1){
        if(!charsInputstring1[char]){
            charsInputstring1[char] = 0;
        }
        charsInputstring1[char] = charsInputstring1[char] + 1;       
    }
    const charsInputstring2 = {};
    for(let char of Inputstring2){
        if(!charsInputstring2[char]){
            charsInputstring2[char] = 0;
        }
        charsInputstring2[char] = charsInputstring2[char] + 1;
    }
    for(let key in charsInputstring1){
        if(charsInputstring1[key] !== charsInputstring2[key]){
            return false;
        }
    }
return true;
}


console.log(CheckAnagram("cat","act"));