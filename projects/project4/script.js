let randomNumber = parseInt(Math.random()*100 + 1) // plus +1 because , it may give zero also and parseInt for rounding out in int form

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startover = document.querySelector('.resultParas')
const p = document.createElement('p');
let prevGuess = []
let numGuess = 1;
let playGame = true

if(playGame){
submit.addEventListener('click', function(e){
    e.preventDefault()
 const guess = parseInt(userInput.value)
 validateGuess(guess)
})
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter valid number')
    }
    else if(guess<1){
        alert('please enter a number more that 1')
    }
    else if(guess>100){
        alert('please enter number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess===10){
            displayGuess(guess)
            displayMessage(`game over. random was${randomNumber}`)
            endgame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage('you guessed it right')
        endgame()
    }
    else if(guess<randomNumber){
        displayMessage('number is too low')
    }
    else if(guess>randomNumber){
        displayMessage('number is too high')
    }
}

function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess}  `;
    numGuess++;
    remaining.innerHTML=`${11 - numGuess}`
}

function displayMessage(Message){
    lowOrHi.innerHTML = `<h2>${Message}</h2>`;
}


function endgame(){
userInput.value=''
userInput.setAttribute('disabled','')

p.classList.add('button')
p.innerHTML = `<h2 id="newGame">start new game</h2>`
startover.appendChild(p) 
playGame= false;
newGame()
}

function newGame(){
const newgamebutton= document.querySelector('#newGame')
newgamebutton.addEventListener('click',function(e){
randomNumber = parseInt(Math.random()*100 + 1)
prevGuess=[]
numGuess=1;
guessSlot.innerHTML=''
  remaining.innerHTML= `${11 - numGuess}`;
  userInput.removeAttribute('disabled')
  startover.removeChild(p)

    playGame=true;
})
}
