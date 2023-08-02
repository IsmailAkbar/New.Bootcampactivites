// // default datatype for promt is string
// let user = (prompt("Enter your username: "))

// let num = parseInt(prompt("Enter the first number: ")); //10
// let num2 = parseInt(prompt("Enter the second: ")); //20
// // can use parseFloat aswell for decimal

// let total = num + num2;

// document.write(`Welcome ${user} <br/>`);

// document.write(`The answer to ${num} + ${num2} : ${total} `);

// document.write(` <br/> The answer to ${num} * ${num2} : ${num * num2} `);





let userInput = prompt("Enter a value:");
let passw = "Correct"
while (userInput === passw) {
    document.write("Loop ended. Correct value entered!")++ ;
}   
document.write("refresh and try again")