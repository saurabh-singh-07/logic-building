// find the factors of a number 
function factors(Nums){
    let factorNumbers = [Nums];
    for(let i = 0; i <= Math.sqrt(Nums); i++){
        if(Nums % i == 0){
            factorNumbers.push(i);
        }
    }
    return `total Number of factor are ${factorNumbers.length}\n these are ${factorNumbers}`;
}
console.log(factors(12));
