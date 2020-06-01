/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const phraseList = document.getElementById("phrase").firstElementChild
const startScreen = document.getElementById("overlay")
const keyboard = document.getElementById("qwerty")
const keys = document.querySelectorAll(".key")
const gameOverMessage = document.getElementById("game-over-message")
const start = document.getElementById("btn__reset")
const scoreBoard = document.getElementById("scoreboard").firstElementChild.children
let disabledLetters = []
let chosenPhrase = "";
let phraseLength = 0
let foundLetterCount = 0

const game = new Game(
    0, 
    [
        "Little knowledge is a dangerous thing",
        "Sold down the river",
        "Sticks and stones may break my bones",
        "The salt of the earth",
        "Back to the drawing board"

    ],
    null
);

//Lister for keyboard clicks, sends letter perameter to handleInteraction method in GAME class
start.addEventListener("click", (e) => {
    if(e.target.tagName == "BUTTON"){
        game.startGame()
    }
})

//Lister for keyboard clicks, sends letter perameter to handleInteraction method in GAME class
keyboard.addEventListener("click", (e) => {
    if(e.target.tagName == "BUTTON"){
    const letter = event.target;
    game.handleInteraction(letter)
    }
})
//Listener for keyboard which matches keys and calls handleInteraction with that key
document.addEventListener("keydown", (e) => {
    const keysArray = [...keys];
    const letter = e.key;
    keysArray.forEach(key => {
        if(key.textContent == letter){
        game.handleInteraction(key)
        }
    })
})