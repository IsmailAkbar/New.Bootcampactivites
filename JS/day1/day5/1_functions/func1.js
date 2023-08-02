// syntax: function functionname 
// function body

greetings() // hoisting calling function before it is declared
function greetings() {
    document.write("Hello")
} // function created

document.write("<br/>")
greetings() //invoke call function

// create function to add to numbers together

function addNums(){
// total variable has a function scope, which is local only to the function.
// As it is declared using the let key it cannot be modified outside of the scope
let total = 2 + 8
document.write("<br/> The answer is ", total, "<br/>")
}


addNums()






