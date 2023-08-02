


// Is an Array
// In JS we count from 0 (array is zero-index)

let people = ["Yousef","Alfredo", "Kayi", "Zineb", "Nirupama", "Melvin", "Eduard", "Vairalakshmi", "Yusuf"]

document.write(people) //everyone




// access items in an array using index value
document.write("<br/>",people[0])

document.write("<br/>",people[7])

//array property : length
// check total number of items in an array using index value using dot notation followed by length

document.write ("<br/>", people.length)

//array methods
// add an item to an array using push method


people.push("Ismail")
document.write("<br/>", people)
document.write("<br/>", people[9])
document.write("<br/>", people.length)


//remove item in an array
people.pop()
document.write("<br/>", people)
document.write("<br/>", people.length)


//update item in an array using index value
people[4] = "Updated"
document.write("<br/>", people, "<br/>")


//investigate
people.splice()
people.shift()
people.unshift()

//you can create an empty array
let emptyArray = []

//objects (create with curly brackets)
let peopleObject = 
   {
     "Yousef":"Loves Coding" ,
"Alfredo":"Loves Icecream",
 "Kayi": 10,
  "Zineb": "H",
   "Nirupama":"a",
    "Melvin": "KK",
     "Eduard": "L",
      "Vairalakshmi": "ff",
       "Yusuf": 11
    };

    for ( key in peopleObject) {
       
        document.write("<br/>", peopleObject[key]);
    }


    // let myObjStr = JSON.stringify(peopleObject);
    // document.write( "<br/>", myObjStr, "<br/>" )


//    document.write("<br/>", peopleObject, "<br/>")
// console.log("<br/>", peopleObject)

//access using bracket notation
document.write("<br/>", peopleObject['Alfredo'])


// Access object data using the dot notation
document.write("<br/>", peopleObject.Alfredo)

document.write("<br/>", peopleObject.Zineb)




// update using bracket notation
peopleObject ['Zineb'] = "Zineb Aqebsi"
document.write("<br/>", peopleObject.Zineb)


// Add new property to an object data using bracket notation
peopleObject.Ismail = ["Akbar", "Loves", "Coding"]
document.write("<br/>", peopleObject.Ismail)

document.write("<br/>", peopleObject.Ismail[2])





let i = ["A", "B", "C"]

document.write(i.length);
















