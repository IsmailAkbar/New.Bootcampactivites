// highorder function is a function that takes in another functions a parameters


function sub(paraNum1, paraNum2) {
    return paraNum1 - paraNum2;
}

 document.write(sub(10, 2))



function Multiply(paraNum1, paraNum2) {
    return paraNum1 * paraNum2;
}

document.write("<br/>", Multiply(10, 2))



// random fucnction practice
// function test(numOne, numTwo) {
//    let test1 = numOne + numTwo;

//    document.write(`<br/> the answer is ${test1} `)
// }

// test(10, 2)


//This is high order function
function calculator(paraNum1, paraNum2, operator){

return operator()
}

let paraNum1 = parseInt(prompt("Enter first number: "))
let paraNum2 = parseInt(prompt("Enter second number: "))

let myCalculator1 = calculator (paraNum1, paraNum2, sub)
document.getElementById ("highorder1").innerHTML +=myCalculator1;







let myCalculator2 = calculator (20, 2, Multiply)
document.getElementById ("highorder2").innerHTML +=myCalculator2;







