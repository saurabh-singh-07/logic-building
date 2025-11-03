// write a prog the print the table of given number

function multiplication(Nums, n){
    if(typeof(Nums) !==Number){
        throw new Error("only Integer are allowed");
    }else{ 
        for(let i = 1; i <= n; i++){
        console.log(`${Nums} * ${i} = ${Nums*i}`);
        }
    }
}
console.log(multiplication(3,10));
 