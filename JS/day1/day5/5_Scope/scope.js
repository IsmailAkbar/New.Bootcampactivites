// The accessibility and how variables can be used is determined by the scope of the variable
// Scope can be 
// Block
// Function
// Global

 // The use of let and const keywords to declare and initiatialise a variable 
 //ensures that the variable has Block scope  and cannot be access outside the curly braces
 let userName = "James";  // has a global scope
 console.log(userName)
 {
 let userName1 = "Abdul";  // local scope
 const piValue = 3.14;
 console.log("Access: ", userName)
 }
 
 // console.log(userName1)
 
 
 {
 
     // The use of var to declare and initiatialise a variable means that the variable 
  // can be access outside the curly braces and does not have a block scope
 var userName2 = "Paul";  // local scope
 }
 console.log("Var keyword: ", userName2)
 
 
 
 
 // function scope: var/let and const keywords to declare and initialise variables inside a function
 // all have fuinction scope and can only be access within the function
 function myBootcamp(){
     let course = "Bootcamp" //  Function scope
     var module = "JS"; // Function scope
     const userData = "SomeValue"; //Function scope
 }
 