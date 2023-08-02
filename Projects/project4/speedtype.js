// let typeSpeed = (actualWords / totalTimeTaken) * 60;

const typingArea = document.getElementById("textarea");
const startBtn = document.getElementById("startBtn");
const score = document.getElementById("score");
const sentence = document.getElementById("sentence");
const time = document.getElementById("time");
let startTime, endTime, totalTimeTaken;

const sentences = ["Boulders lined the side of the road foretelling what could come next.", "Henry couldn't decide if he was an auto mechanic or a priest.", 
"Today I dressed my unicorn in preparation for the race."];

const calTypeSpeed = (timeTaken) => {

let totalWords = typingArea.value.trim();
let actualWords = totalWords === "" ? 0 : totalWords.split(" ").length;




if (actualWords !== 0) {
    let typeSpeed = (actualWords / timeTaken) * 60; 
    typeSpeed = Math.round(typeSpeed)
    score.innerHTML = `Your typing speed is ${typeSpeed} words per minute and you wrote ${actualWords} words in ${timeTaken} secs` 
}
else {

    score.innerHTML =  `Your typing speed is 0 words per minute and the time taken is ${timeTaken} secs`


}
}



const endTypingTest = () => {
    
    startBtn.innerText = "Start"; 


let date = new Date();
endTime = date.getTime()

totalTimeTaken = (endTime - startTime)/ 1000;

// console.log(totalTimeTaken)

calTypeSpeed(totalTimeTaken)
sentence.innerHTML = "";
typingArea.value = "";
}

let interval = 0;
let elapsedTime = 0;

// const timer = () => {
    
//     if (startBtn.innerText === "Done") {
        
//     interval = setInterval( () => {elapsedTime++;
//      time.innerHTML = elapsedTime;
//     }, 1000)

//     }

// else if (startBtn.innerText === "Start") {
//     elapsedTime = 0;
//     clearInterval(interval);
//     time.innerHTML = ""
// }

// }
setInterval(theInt, 1000)
let count = 0;// count varaible starts from
if (startBtn.innerHTML = "Start") {
function theInt(){
count++;
time.innerHTML = count;
}

}


const startTyping = () => {
let randomNum = Math.floor(Math.random() * sentences.length);
// console.log(randomNum);
sentence.innerHTML = sentences[randomNum];
let date = new Date();
startTime = date.getTime();
startBtn.innerText = "Done";
}






startBtn.addEventListener("click", () => {



    switch (startBtn.innerText.toLowerCase()) {
        case "start":
            typingArea.removeAttribute("disabled");
            startTyping();
            break;

            case "done":
                typingArea.setAttribute("disabled", "true");
                endTypingTest();
                break;
    }
})






















