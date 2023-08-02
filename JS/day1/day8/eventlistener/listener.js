const addButton = document.querySelector("#btnAdd")
const dltButton = document.querySelector("#btnDlt")


// addeventlistener to the variables that hold the values to their respective ids
addButton.addEventListener("click", () => {

let newElement = document.createElement("h2");
newElement.innerText = "This is a new element";
document.body.appendChild(newElement);
})



dltButton.addEventListener("dblclick", () => {

    document.body.lastChild.remove()
})

























