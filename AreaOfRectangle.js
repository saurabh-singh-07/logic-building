// problem no 3 print the area of rectangle

function CalculateArea(Length , width){
    if(typeof Length === "number" && typeof width === "number"){
        if(Length <= 0){
            throw new RangeError("length could not be -tive")
        }
        if(width <= 0){
            throw new RangeError("width could not be -tive")
        }
        return Length * width;
    }else{
        throw new Error("Only Number are allowed");
    }
    
}
const Area = CalculateArea(3, 5);
console.log("area of rectangle is :", Area);
