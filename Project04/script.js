const randomNumber = parseInt(Math.random()*100+1);

const form  = document.querySelector("form");
const text = document.querySelector("#text")
const textField = document.querySelector(".textfield")
const submit =  document.querySelector("#sub")
const guessSubmit = document.querySelector(".guessSubmit")
const result = document.querySelector(".resultParas")
const guess = document.querySelector(".guesses")
const lastResult = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")

const p = document.createElement('p')


let prevGame = []
let numGuess = 1

let playGame = true; 

function validateGuess(guess) {
    //
}

function checkGuess(guess) {
    // 
}

function displaMessage(message) {
    // 
}