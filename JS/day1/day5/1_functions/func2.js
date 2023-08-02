// declare a function with parameter called "age"
//
function lifeInWeeks(age){
    let averageAge = 70;
    let yrsRemaining = averageAge - age
    document.write(`You have, ${yrsRemaining} more to live for, based on your age of ${age} years`)
}
// A function that ise declared with parameter(s)
// must be caling with a matching argument(s)
lifeInWeeks(19)
    document.write("<br/>")

function lifeInWeeks2(age,averageAge){
    let yrsRemaining = averageAge - age
    document.write(`You have, ${yrsRemaining} more to live for, based on your age of ${age} years`)
}
lifeInWeeks2(20, 50)


function bmiCalculator(weight, height){
    return (weight / height ** 2).toFixed(2)
}

// assign the function to a variable
let userBMI = bmiCalculator(69,1.8)
document.write("<br/> Your BMI is: ", userBMI, "<br/>")
document.write("<br/> Your BMI is: ", bmiCalculator(88,1.5), "<br/>")

function getUserInfo(fName, lName, age){
    return  `${fName} ${lName} ${age}`
}

let userDetails = getUserInfo("Paul", "Smith", 21)
document.write("Welcome", userDetails, "<br/>")

// Ask for user input, store it in theire respective variables
// Pass the variables as arguments when you call the function
let userFname = prompt("Enter your first name: ")
let userLname = prompt("Enter your last name: ")
let userAge = parseInt(prompt("Enter your age: "))

let userDetails2 = getUserInfo(userFname, userLname, userAge)
document.write("Welcome", userDetails2, "<br/>")















