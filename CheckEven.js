//  check the even number
// function checkeven(n){
//    if(n == 0 ){
//        console.error("0 is neutral number")  
//     }else{
//         if(n%2==0){
//             console.log(`${n} is even number`);
//         }else{
//            console.log(`${n} is odd number`)
//         }
//         return n % 2 == 0 ? "even" : "odd";
//     }
// }
function checkeven(Nums){
    if(Nums == 0 ){
       console.error("0 is neutral number")  
    }else{
        if(Nums & 1 === 0){
            console.log("Even Number")
        }else{
            console.log("Odd Number")
        }
    }
}
checkeven(5);
