const randomNumber = parseInt(Math.random()*100+1);

const form  = document.querySelector("form");
const text = document.querySelector("#text")
const textField = document.querySelector(".textfield")
const submit =  document.querySelector("#sub")
const guessSubmit = document.querySelector(".guessSubmit")
const result = document.querySelector(".resultParas")
const guesses = document.querySelector(".guesses")
const lastResult = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")

const p = document.createElement('p')


let prevGuess = []
let numGuess = 1

let playGame = true; 

if (playGame) {
    submit.addEventListener('click',function(e) {
        e.preventDefault(e)
        const guess =  parseInt((text.value))
        // console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number.");
        return;
    }else if(guess<1){
        alert("Please enter a valid number.");
        return;
        }else if(guess<1){
        alert("Please enter a number more than 1");
        return;
        }else if(guess>100){
            alert("Please enter a number less than 100");
            return;
        }else{
            prevGuess.push(guess)
            if (numGuess === 11) {
               displayGuess(guess)
               displaMessage(`Game Over.Random number was${randomNumber}`)
               endGame()
            }
            else{
                displayGuess(guess)
                checkGuess(guess)
            }
        }
}

function checkGuess(guess) {
   if (guess === randomNumber){
    displaMessage(`You guessed it right `)
    endGame()
   }else if(guess<randomNumber){
    displaMessage(`Your Number is too low `)
   }else if(guess>randomNumber){
    displaMessage(`Your Number is too high `)
   }
}

function displayGuess(guess) {
    text.value = ''
    guesses.innerHTML += `${guess}  `
    numGuess++;
    lastResult.innerHTML = `${11-numGuess}`

}

function displaMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    text.value = ''
    text.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame"> Start New Game </h2>`;
    result.appendChild(p)
    playGame = false 
    newGame()
}

function newGame() {
   const newGameButton = document.querySelector('newGame')
   newGameButton.addEventListener('click',function(e) {
    let randomNumber = parseInt(Math.random()*100+1);
    prevGuess = []
    numGuess = 1 
    text.innerHTML = ''
    lastResult.innerHTML = `${11-numGuess}`;
    text.removeAttribute("disabled")
    result.removeChild(p)

    playGame = true
   }

                                  //Naresh Singh 
