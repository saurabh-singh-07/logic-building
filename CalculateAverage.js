// find the average of a given integer eleement of an array 

function CalculateAverage(InputArray){
    let Average;
    let sum = 0;
    for(let i = 0; i <= InputArray.length; i++){
        sum = sum + i;
    }
    Average = sum/InputArray.length;
    return Average;
}
const InputArray = [1,2,3,4,5,6];
console.log(CalculateAverage(InputArray))