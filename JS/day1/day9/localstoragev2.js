// linking variables with respesctive ID in the html page
const itemKey = document.getElementById("itemKey")
const itemValue = document.getElementById("itemValue")
const btnSubmit = document.getElementById("btnSubmit")
const searchInput = document.getElementById("searchInput")
const btnSearch = document.getElementById("btnSearch")
const btnClearStorage = document.getElementById("btnClearStorage")
const btnDeleteByKey = document.getElementById

// save button to save data local storage 
btnSubmit.addEventListener("click", () =>{
    //get the key from the key field on the form
    const savedKey = itemKey.value
    //get the value from the value field on the form
    const savedValue = itemValue.value
    if (savedKey && savedValue){
        localStorage.setItem(savedKey, savedValue)
    }else{
        document.write("Ensure both the key and value field is not empty")
    }
})
console.log(localStorage)

// output/ retrieve all key value pairs from local storage to document(browser)
for (let keyValuePairs = 0; keyValuePairs < localStorage.length; keyValuePairs++){
    // get the first and assign it to storageKey,
    // then get the second key and assign it to storageKey....until you complete the loop
    const storageKey = localStorage.key(keyValuePairs)
    // pass the storageKey variable which now hold a copy as an argument inside the getItem method
    //localStorage.getItem("fName")
    const storageValue = localStorage.getItem(storageKey)
    //creates a p tag for every key value pairs  and assign it to the  localStorageData variable
    let localStorageData = document.createElement('p')

    // set the attribute
    localStorageData.setAttribute('id',`${storageKey}` )
    // get the key value pairs  data 
    localStorageData.innerText = `Key: ${storageKey} | Value: ${storageValue}`
    // add to the body elemnt of the document 
    document.body.append(localStorageData)
}



// search local storage

btnSearch.addEventListener("click", (searchEvent) => {

    searchEvent.preventDefault

const searchKey = searchInput.value

const searchResult = localStorage.getItem(searchKey)
// create a p tag for a specific key value pairs searched and assign to varaible called
let retrieveKeyValuePairs = document.createElement('p')

retrieveKeyValuePairs.innerText = `search result: ${searchKey} | value: ${searchResult}`

document.body.append(retrieveKeyValuePairs)





})






// delete all items 

btnClearStorage.addEventListener("click", () => {
    localStorage.clear()
    // localStorage.removeItem("")
    location.reload()
})




delete by key 

btnDeleteByKey.addEventListener("click", () =>{
        const searchKey = searchInput.value
    //localStorage.getItem("fName")
    // const searchResult = localStorage.getItem(searchKey)
    localStorage.removeItem(searchKey)
        location.reload()

})







