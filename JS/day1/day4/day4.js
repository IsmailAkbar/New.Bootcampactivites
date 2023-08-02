//for loop is use to iterate over an object for a specific number of times 
// ++ is the increment operator
// startNum value is 1, startNum(1) can't be bigger that 20, startNum + 1 + 1 +1 +1 +1 +1 .....startNum is now 20

/* What we will write 
document.write(1 + 1)
document.write(2 + 1)
document.write(3 + 1)
document.write(4 + 1)
document.write(5 + 1)
*/

//  What the for loop will do for us 

// let mutliplesOfTwo = []

// for (let startNum = 1; startNum < 21; startNum++) {
//     // document.write(`<br/>${startNum}`)
//     // startNum = 1
//      // startNum = 2
//       // startNum = 3
//        // startNum = 4
//         // startNum = 5
//     if (startNum % 3 ===  0){
//         mutliplesOfTwo.push(startNum)


//     }

// }
// document.write(mutliplesOfTwo)

// // let mutliplesOfTwo = []

// // let aNum = 10
// // if (aNum % 2 ===  0){
// //     mutliplesOfTwo.push(aNum)
// //     document.write(mutliplesOfTwo)

// // }
// // else{
// //       document.write("Empty list")
// // }

// // for in loop
let people = ["Yousef","Alfredo", "Kayi", "Zineb", "Nirupama", "Melvin", "Eduard", "Vairalakshmi", "Yusuf"]
for (let person in people){
    // document.write(people[person])}
    // document.write("<br/>",people[person] , "<br/>")}
    console.log(person) }
// //nested if is dependent on the for loop
// if (people[person] === "Vairalakshmi"){
//               break;
        
// }
// document.write("<br/> Cut the list e : ",people[person])
//     }

// // for of loop
let days = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"]
for (let aDay of days){
    document.write("<br/>", aDay, "<br/>") // will list an array
}

// // for of loop
// let name = "Paul Smith";
// for (let char of name){
//     document.write("<br/>", char)
// }


// // While iterates/repeats until a condition is met

// let number = 20;
// let userNum = 5;

// while (userNum <= number){
//     document.write("<br/>", "The number is", userNum , "<br/>")
//     userNum++;
// }

// let userData = prompt("Enter user data: ")
// let data = "Em"

// while (data === userData){
//     document.write("Welcome and goodbye")
//     // data++

// }


// let userPass = prompt("Enter system password: ")
// let sysPass = "Password"
// while(sysPass === userPass){
//     document.write("<br/> Log in successful!")
//     // sysPass++
// }



// ForEach method calls a function for each element in an array

let peopleArray = ["Yousef","Alfredo", "Kayi", "Zineb", "Nirupama", "Melvin", "Eduard", "Vairalakshmi", "Yusuf"]




peopleArray.forEach(namesFunc)

/*
function nameofthefunction(parameter(s){
    functionBody: what you the function to do
    callFunction()
} */
// pass in two parameters to get the index position and the value of the items in the Array
function namesFunc(arrayIndex, arrayItem){
    document.write(arrayItem, " ", arrayIndex, "<br/>")
}

namesFunc(1, 2)
// Do While run the loop first before checking for the condition

let number1 = 10;
let number2 = 11;

do { 
    document.write("Hello: this loop will execute once and then check the condition")
} while(number1 > number2)



let numX = 5;
let numY = 4;

do{ // 5    =  5 + 1 = 6,  6 + 2 = 8, 8 + 3 = 11 
      numX = numX + numY
     
      document.write("<br/> Do While ", numX)
      numY++ 
}while(numY < 4);


// let peopleArray = ["Yousef","Alfredo", "Kayi", "Zineb", "Nirupama", "Melvin", "Eduard", "Vairalakshmi", "Yusuf"]
// /                       0 < 9; 0++
document.write("<br/> Total number of items in People array : ", peopleArray.length)
for (let aPerson = 0; aPerson < peopleArray.length;aPerson++){
    document.write("<br/> People array : ", peopleArray[aPerson])
}

// Tasks
for (let zeroToTwenty = 20; zeroToTwenty > -1; zeroToTwenty--) 
{
    document.write("<br/>", zeroToTwenty, "<br/>")



}


// let userInput = 10;
// let fixedNum = 5;

// while (userInput >= fixedNum) {

// document.write("<br/>", userInput, "<br/>")
// userInput--
// }
    






// let userInput = prompt("Enter a value:");
// let passw = "Correct"
// while (passw === userInput) {
//     document.write("Loop ended. Correct value entered!");
// }
// document.write("refresh and try again")











