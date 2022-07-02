
let message = ""
let hasBlackjack = false
let isAlive = true
let sumEl = document.querySelector("#sum-el") //another way to grab elements from html , we have to specify it more, # for id, . for class and nothing forentirethings
let messageEl = document.querySelector("#message-el")
let cardsEl = document.querySelector("#cards-el")

function startGame(){
    let firstCard = Math.floor(Math.random() * 21 + 1); // Math.random() gves a rando number between 0 and 1 which is not inclusive of 1
    let secondCard = Math.floor(Math.random() * 21 + 1);
    let sum = firstCard + secondCard;

    if (sum <= 20){
        message = "Would you like to draw again?"
    }else if (sum === 21){
        message = "You have won"
        hasBlackjack = true
    }else{
        message= "You have lost"
    }

    cardsEl.textContent=`Cards: ${firstCard} ${secondCard}`
    messageEl.textContent=message
    sumEl.textContent = `Sum: ${sum}`


}