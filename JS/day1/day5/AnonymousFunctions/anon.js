// anonymous is function without a name

let helloFunc = function() {
    return "Hello"
}




let helloUser = helloFunc();
document.getElementById("anon").innerHTML += helloUser;

document.getElementById("anon").innerHTML += helloFunc();








