// function CheckPalindromeNumber(num){
//     if(num < 0 || (num % 10 == 0 && num !== 0)){
//         return false;
//     }
//     const numstr = num.toString();
//     const reverseString = numstr.split('').reverse().join('');
//     return numstr == reverseString;
// }
// console.log(CheckPalindromeNumber(1221));
//  CheckPalindromeNumber(num){
//     if(num < 0 || (num % 10 == 0 && num !== 0)){
//         return `${num} is not a Palindrome number`;
//     }else{
//         let OrginalNums;
//         let ReverseNums = 0;
//         let Reminder;
//         while(num != 0){
//             Reminder = num % 10;
//             ReverseNums = ReverseNums * 10 + Reminder;
//             num /= 10;
//         }
//         if(OrginalNums === ReverseNums){
//             console.log(`${num} is a palindrome number`);
//         }
//     }
// }
// console.log(CheckPalindromeNumber(1221));
let num = 1221;
let OriginalNums = num;
let ReverseNums = 0;
let Reminder;
if(num < 0 || (num % 10 == 0 && num !== 0)){
       console.log(`${num} is not a Palindrome number`);
}else{
    while(num !== 0){
        Reminder = num % 10;
        ReverseNums = ReverseNums * 10 + Reminder;
        num = Math.floor(num / 10);
    }
    if(OriginalNums === ReverseNums){
        console.log(`${OriginalNums} is a palindrome number`);
    }else{
        console.log(`${OriginalNums} is not a palindrome number`);
    }
}
    