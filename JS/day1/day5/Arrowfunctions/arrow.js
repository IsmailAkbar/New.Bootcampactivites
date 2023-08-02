
function greet1() {
    document.getElementById("greetings1").innerHTML = "Good Afternoon";


}



greet1()


function greet2() {
    let aValue = prompt("Enter a Message: ")
    document.getElementById("greetings2").innerHTML = aValue;


}



greet2()



// arrow method of writing a function is the modern way of writing a function introduced with echma6



// let functionVariable = () => {

// arrow function body


// }




let greet3 = () =>{

document.getElementById("greetings3").innerHTML += "Ismail";
}



greet3()


let greet4 = (paraGreet) => {

return paraGreet;

}


//method1


let myGreetings = greet4("Bonjour")
document.getElementById("greetings4").innerHTML += myGreetings;

//method 2
document.getElementById("greetings5").innerHTML += greet4("hola");


//method 3
let weeknd = "here"
document.getElementById("greetings6").innerHTML += greet4(weeknd);





// Arrow function wihtout return statement only used when function has one statement

let greet5 = () => "is Friday" ;
document.getElementById("greetings7").innerHTML += greet5();


let greet6 = (userName, tage) => userName + "age is" + tage;

document.getElementById("pAge").innerHTML =+ greet6("Ismails", "22");










