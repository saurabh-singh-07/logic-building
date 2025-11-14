// write a program that checks if the provided password is strong or not

function IspasswordStorng(password){
    const length = password.length;
    const specialChar = "!@#$";
    const UpperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const LowerChar = "abcdefghijklmnopqrstuvwxyz";
    const Nums = "1234567890";
    let specialCharExists = false;
    let UpperCharExists = false;
    let LowerCharExists = false;
    let numsExists = false;
    if(length < 8){
        console.log("password should must be Minmum 8 characters")
    }
    for(let char of password){
        if(specialChar.includes(char)){
            specialCharExists = true;
        }else if(UpperChar.includes(char)){
            UpperCharExists = true;
        }else if(LowerChar.includes(char)){
            LowerCharExists = true;
        }else if(Nums.includes(char)){
            numsExists = true;
        }
    }
    
    if(specialCharExists && UpperCharExists && LowerCharExists && numsExists){
        console.log("your password is strong")
    }else{
        console.log("please enter strong password")
        throw new Error("must be at least one special, one number, one uppercase and one lower case");
    }
}

IspasswordStorng("pafdswe@f");


