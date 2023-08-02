const dataOutput = document.querySelector("#outputData")

// Asynchronous function to fetch data 
async function getData(){
    //Await the response from the API
    const response = await fetch(`https://hp-api.onrender.com/api/characters`)
    // wait on the response and conver to JSON upon receiving it 
    const apiData = await response.json() 
// return and work with converted data 
return(apiData)

} 
document.addEventListener("DOMContentLoaded", async ()=>{


   let apiData1 = []

    apiData1 = await getData()  //call the getData function and pass it to the arrayVariable
    // try{
    //     // apiData1 =  apiData
    //     apiData1 = await getData() 

    // }catch(error){
    //     console.log
    // }

 
console.log(apiData1)

    for (let {name, yearOfBirth, gender, image,} of apiData1){
        const cardContainer = document.createElement('div')
        cardContainer.classList.add('cardContainer')
        const imageContainer = document.createElement('div') // imageContainer
        imageContainer.classList.add('imageContainer')
        const characterName = document.createElement('h2')
        characterName.innerText = `${name}`
        cardContainer.append(characterName)
        //
        const characteryearOfBirth = document.createElement('p')
        characteryearOfBirth.innerText = `${yearOfBirth}`
        cardContainer.append(characteryearOfBirth)

        const characteryeargender = document.createElement('p')
        characteryeargender.innerText = `${gender}`
        cardContainer.append(characteryeargender)
        //
        cardContainer.append(imageContainer)
        const characterImage = document.createElement('img')
        characterImage.setAttribute('src',image)
        imageContainer.append(characterImage)
        dataOutput.append(cardContainer)


    }


})





























