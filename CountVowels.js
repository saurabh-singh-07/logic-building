// write a program to find the number of Vowels and Consonant 

function CountVowels(Inputstring){
    if(typeof Inputstring === 'string'){
        const Vowels = 'aeiou';
        const Consonants = 'bcdfghjklmnpqrstvxyz';
        let VowalCounter = [];
        let ConsonantCounter = [];
        for(let i = 0; i < Inputstring.length; i++){
            if(Vowels.includes(Inputstring[i])){
                VowalCounter.push(Inputstring[i]);
            }else if(Consonants.includes(Inputstring[i])){
                ConsonantCounter.push(Inputstring[i]);
            }
        }
        return `The Vowals are ${VowalCounter.length} , ${VowalCounter} \n Consonant are ${ConsonantCounter.length} , ${ConsonantCounter}`;
    }else{
        throw new Error("Only string are allowed");
    }
}
let input = CountVowels("hey i am  ajinkya");
console.log(input);