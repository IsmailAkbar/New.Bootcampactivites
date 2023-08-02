// .style.color = "red" to change color in dom

//document.firstchild list all html
//document.firstchild.firstelementchild list all head
//document.firstchild.firstelementchild.firstelementchild list first meta tag


//console work
//document.firstElementChild.lastElementChild.firstElementChild.nextElementSibling how i accessed p#one 
//document.firstElementChild.lastElementChild.firstElementChild.nextElementSibling.style.color = "red";
// let fsb = document.firstElementChild.lastElementChild.firstElementChild.nextElementSibling;
// undefined
// fsb.style.color = "orange"
// 'orange'



//let oneP = document.firstElementChild.lastChild.firstElementChild.nextElementSibling         this picks p#one
// oneP.outerHTML = '<h6 id=myId> Changed </h6>';
// output on console '<h6 id=myId> Changed </h6>'





let allHOnes = document.querySelectorAll("h1"); //.innerHTML = "SOme text";
for(fisrtH1 = 0; fisrtH1 < allHOnes.length; fisrtH1++){
    allHOnes[fisrtH1].style.color = "red";
    allHOnes[fisrtH1].style.fontFamily = "Cursive";

}

//


let threeSelectors = document.querySelectorAll("h2, #three, .yourClass"); //.innerHTML = "SOme text";
for(i = 0; i < threeSelectors.length; i++){
    threeSelectors[i].style.color = "Yellow";
    threeSelectors[i].style.fontFamily = "Sans-Serif";
    threeSelectors[i].style.fontSize = "3rem";

}


// using for each on a list 
const pClass = document.querySelectorAll(".pClass");
function myPClass(){
    for(i = 0; i < pClass.length; i++){
   pClass[i].style.color = "blue";
   pClass[i].style.fontSize = "5rem";
}}

pClass.forEach(myPClass)

// myPClass()























