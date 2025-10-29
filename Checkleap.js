// check leap year
function CheckLeapYear(InputYear){
    if(typeof InputYear === "number"){
        if(InputYear <= 0){
            throw new Error("year must be a positive Number");
        }else{
            InputYear % 4 === 0 ? console.log(`${InputYear} is a Leap Year`) : console.log(`${InputYear} is not a leap Year`);  
        }
    }else{
        throw new Error("Only integer are allowed ")
    }
}
CheckLeapYear(2004);