// variable is a container that holds value (of any data type)



// var = old syntax dont use
var firstPerson = "Abdul";
var firstPerson = "James"; 
// can redeclare variable

// let is method for declaring variables that we may want to redeclare/reassign valu

let secondPerson = "Yusuf";
secondPerson = "Jane";
// cannot redeclare let variable but can redeclare assign "secondPerson = jane"
// declared user variable but with no value

let user;

console.log ("my name is ", firstPerson)
console.log ("my name is ", secondPerson)




document.write("my name is ", firstPerson)
document.write("<br/>my name is ", secondPerson)
document.write("<br/>This variable is declared but not initialised<br/>", user)




console.log(user)

// const to use varibales with values that will never change
const daysInWeek = 7


document.write ("<br/> Orginal Value:", daysInWeek);

// we cannot overide value of const variable
// daysInWeek = 5;



// document.write ("<br/> Modified Value:", daysInWeek );




// JavaScript datatype
document.write ("<br/> JavaScript Datatypes <br/>");



let strVariable = "hello"
document.write ("<br/> This is a string <br/>");

document.write ("<br/>", strVariable);



// numbers
// float/decimals
// interger/number
let num1 = 10;
let myFloat = "12.8";
let longVariable = "912345678901123"

document.write ("<br/>  number ", num1 );
document.write ("<br/> decimal ", myFloat );
document.write ("<br/> long ", longVariable );



// boolean
// true or false
let myBool1 = true;
let myBool2 = false;
document.write ("<br/> boolean 1", myBool1 );
document.write ("<br/> boolean 2 ", myBool2 );
document.write ("<br/>", );
document.write ("<br/>", );
document.write ("<br/>", );
document.write ("<br/>", );


// example of joining variables (cantenate)
let fName = "Ismail";
let lName = "Akbar";


let fullName = fName + " " + lName;

document.write ("<br/> Full name: ", fullName );

// template literals

document.write ("<br/> template literals <br/> ", );

let breakfast = "toast";
let lunch = "chicken";
let dinner = "sausage";

document.write (`Today, ${fullName}, had ${breakfast} and will have ${lunch} for lunch and ${dinner} for dinner `);
document.write (`<br/> ${fName} ` );


// checking data type
document.write(typeof dinner, "<br/>" );
document.write(typeof num1, "<br/>" );





// task
let age = 3;                   
document.write("my age is ", age);    
let ffName = "Ismail A";     
   console.log (`Hi my name is ${ffName}`)


