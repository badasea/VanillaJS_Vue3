const wordInput = document.querySelector("#word-input")
const currentWord = document.querySelector("#current-word")
const scoreDisplay = document.querySelector("#score")
const timeDisplay = document.querySelector("#time")
const messageDisplay = document.querySelector("#message")

const GAME_TIME = 5;
let words = ['banana', 'key', 'cat', 'javascript', 'bada']
let score = 0;
let time = 0;
let timeInterval;
let isPlaying = false;
let isReady = false;

const API_URL = "https://random-word-api.herokuapp.com/word?number=10";

init()

// async await
async function init() {
    const res = await fetch(API_URL);
    const data = await res.json();
    words = data.filter(item=> item.length < 7)
    isReady = true;
    //words = data;
}

// promise
// function init() {
//     const res = fetch(API_URL).then((res)=>{
//         return res.json()
//     }).then((data)=>{
//         words = data;
//         // console.log(data)
//     });
// }



time = GAME_TIME;
timeInterval = setInterval(countDown, 1000)

wordInput.addEventListener("input",(e)=>{
    const typedText = e.target.value
    const currentText = currentWord.innerText
    // console.log(typedText, currentText)
    if(typedText.toUpperCase() === currentText.toUpperCase() && isReady) {
        addScore()
        setNewWord()
    }
})

function gameover() {
    isPlaying = false;
    clearInterval(timeInterval)
    timeInterval = null;
    messageDisplay.innerText = "GAME OVER!"
    score = 0;
}

function countDown() {
    time = time - 1;
    timeDisplay.innerText = time;
    if (time === 0) {
        gameover();
    }
}

function setNewWord() {
    time = GAME_TIME;
    wordInput.value = "";
    messageDisplay.innerText = "Now Playing!!!"
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord.innerText = words[randomIndex]

    if(!isPlaying) {
        timeInterval = setInterval(countDown, 1000)
        isPlaying = true;
    }
    // timeInterval = setInterval(countDown, 1000)
}

function addScore() {
    score = score + 1;
    // console.log(score)
    scoreDisplay.innerText = score
}
