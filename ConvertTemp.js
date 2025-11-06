// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C
function TemperatureConverter(Celsius){
    let fahrenheit = (Celsius * 9/5) +32;
    return fahrenheit;
}
console.log(TemperatureConverter(27))

function TemperatureConverter0(Fahrenheit){
    let Celsius = (Fahrenheit - 32) * 5/9;
    return Celsius;
}
console.log(TemperatureConverter0(45))