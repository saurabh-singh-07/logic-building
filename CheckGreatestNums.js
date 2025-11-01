// Greatest Number in the given numbers
function checkgreatestNums(){
    let a = 24
    let b = 35
    let c = 46

    if(a>b && a > c){
        return `${a} is greater number`
    }
    else if(b>a && b > c){
       return `${b} is greater number`
    }
    else{
        return `${c} is greater number`
    }
}
console.log(checkgreatestNums());
// th get the min nums in arr by build in methods
// let nums = [2,4,5,6,6,7,8,8];
// console.log(Math.min(...nums))
