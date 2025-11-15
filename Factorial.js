 // find the factorial of number 
function factorial(Nums){
    if(Nums==0 || Nums==1){
        return 1;
    }
   return Nums * factorial(Nums-1);
}
const Nums = 3;
console.log(factorial(Nums))
