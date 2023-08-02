document.write("He said hello that is it<br/>");
// how to create a quote is below line 3
document.write("He said \"hello\" that is it<br/>");
document.write("He said 'hello' that is it<br/>");
document.write('He said "hello" that is it<br/>');
//  \n and \u000a works in console to break line 
document.write("He said \nhello that is it<br/>");




document.write(" <br/> string functions <br/>");


let breakfast = "toast";
let lunch = "chicken";
let dinner = "sausage and mash";
// length function
document.write("The length is: " + lunch.length)
document.write("<br/> In uppercase " + breakfast.toUpperCase()  );
document.write("<br/> In lowercase " + dinner.toLowerCase()   );
document.write("<br/> " + dinner.replace("mash", "fries"));
document.write("<br/> " + lunch.slice(1, 8));
// negative value starts from right
document.write("<br/> " + lunch.slice(1, -3));
// substring doesnt take any negative values compared to slice
document.write("<br/> " + lunch.substring(1, 10));

document.write("<br/> " + breakfast.indexOf("o"));
document.write("<br/> " + breakfast.indexOf("s"));
document.write("<br/> " + breakfast.lastIndexOf());

let num = 10; //type coercion automatically done by JS interpretor

document.write("<br/>Type coversion "); // when we want user input
let num2 = 11;
let num3 = 12;




document.write("<br/> ", typeof num2, "<br/> " );
let num2String = String(num2) // coverting number data type to string data type and pass it to variable called num2String
document.write("<br/> This is a ", typeof num2String, "<br/> ")

let num4 = "500";

document.write("<br/>  This is ", typeof num4, "<br/> " );
document.write("<br/> This is ", typeof Number(num4), "<br/> " );
document.write("<br/> This is ", typeof parseInt(num4), "<br/> " );

let myFloat = "12345.56";
document.write("<br/>", typeof myFloat, "<br/>");
document.write("<br/>", typeof parseFloat(myFloat),"<br/>");



let myBool = 1;
document.write("<br/>", typeof myBool, "<br/>");
document.write("<br/>", typeof Boolean(myBool), "<br/>");


// Comparison Operators:

// == - Equal to

// === - Equal Value and Equal Data Type

// != - Not Equal to

// !== - Not Equal Value or Equal Data Type

// > - Greater Than

// < - Less Than

// >= - Greater than or equal to

// <= - Less than or equal to 

// Logical Operators:

// || - or

// && - and

// ! - not


document.write("<br/> If, Else If and Else <br/>");



// if (condition){
//     do something 
// }


// else if (another condition){
//     do another thing
// }

// else { do something else, because none of the codnitions above were met}



// ! EXAMPLE


let trafficLight = "Green";

if (trafficLight === "Red"){
document.write(" <br/> stop and wait");
}

else if (trafficLight === "Amber"){
    document.write(" <br/> Get ready");
}

else if (trafficLight === "Green"){
    document.write(" <br/> Go <br/>");
    
} 

else { document.write(" <br/> Faulty, cross at your own risk <br/>");
    
} 
    





// TASK check if can serve alcohol depnding on age
let age = 18;            
 if ( age >= 18){ document.write (" <br/> Is old enough <br/>");}     
 else { document.write(" <br/> He/she is underage <br/>");}    



// If password is correct character length
 let password = "JustIT"

 if (password.length >= 6) {document.write("<br/> Password Accepted <br/>");
    
 }

 else if (password.length >= 1) {document.write("<br/> Password Too Short <br/>");
    
 } else {document.write("<br/> Type Password <br/>")
    
 }

//  program to see if number is divisible by 3 or 5    ( % is called modulus operator and checks for remainders)

let answer = 1;
 

if (answer %5 === 0 && answer %3 === 0) {document.write("<br/> Divisible by 5 and 3 <br/>");
    
} 


else if (answer %5 === 0 || answer %3 === 0) {document.write("<br/> Divisible by 5 or 3 <br/>");

}
else {document.write("<br/> Not divisble by 5 or 3 <br/>");
    
}





let userName = "Mohammad";


if (userName === "James") {document.write("<br/> Welcome James <br/>");
    
}

else {document.write(` <br/> Hello ${userName} <br/>`);
}



// Switch case

document.write("<br/> Switch case <br/>");

let day = "Wednesday"


switch (day){
     case "Monday":
        document.write("<br/> Happy Monday <br/>")
        break;
     case "Tuesday":
        document.write("<br/>  Happy Tuesday <br/>")
        break;
        case "Wednesday":
            document.write("<br/> Happy Wednesday <br/>")
            break;
            case "Thursday":
                document.write("<br/> Happy Thursday <br/>")
                break;
                case "Friday":
                    document.write("<br/> Happy Friday <br/>")
                    break;

        default:
            document.write("<br/> Weekend <br/>")

}


// In-built JavaScript library  
document.write("<br/>  <br/>")
document.write("<br/> Math <br/>")

// Use the dot notation on methods, libraries and functions
document.write(Math.random()) // Returns a pseudorandom number between 0 and 1.

// Generate random number between 1 and 10 (number between 0 and 1  x 10)
document.write("<br/>",Math.random() * 10)


// Generate random number between 1 and 10 (number between 0 and 1  x 10) and round it down using the floor method
let roundNum = Math.random() * 10
document.write("<br/>Random value :", roundNum)

// document.write("<br/>Rounded down using floor method : ",Math.floor(Math.random() * 10))
document.write("<br/>Rounded down using floor method : ",Math.floor(roundNum))

// Generate random number between 1 and 10 (number between 0 and 1  x 10) and rounds it using the round method
// document.write("<br/>Rounded using round method : ",Math.round(Math.random() * 10))
document.write("<br/>Rounded using round method : ",Math.round(roundNum))

// Generate random number between 1 and 10 (number between 0 and 1  x 10) and round up using the ceil method
// document.write("<br/>Rounded using round method : ",Math.ceil(Math.random() * 10))
document.write("<br/>Rounded up using ceil method : ",Math.ceil(roundNum))





// Arrays and Objects










