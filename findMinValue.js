// write a program to find the minmum value of array using reduce 

let arr = [23, 43, 5, 34, 6, 75, 34];

let result = arr.reduce((min, elem) =>{
    if(min < elem){
        return min;
    }else{
        return elem;
    }
})

console.log(result)