// find the morjority element in the array
let arr = [1,1,2,2,2,3,2];
let size = arr.length;
arr.sort();
let feq = 1;
let ans = arr[0];
for(let i = 0; i < size; i++){
    if(arr[i] === arr[i-1]){
        feq++;
    }else{
        feq = 1;
        ans = arr[i];
    }
    if(feq > size/2){
    console.log(`the number is ${ans} and it's feq is ${feq}`)
}
}
