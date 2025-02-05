var cardCounter = 2
var sum = 0
var firstCardEl = document.getElementById('first-card')
var secondCardEl = document.getElementById('second-card')
var sumEl = document.getElementById('sum')

let dealerChance = [
    { threshold: 14.6, result: 17 },
    { threshold: 28.4, result: 18 },
    { threshold: 41.9, result: 19 },
    { threshold: 59.5, result: 20 },
    { threshold: 71.8, result: 21 },
    { threshold: 100, result: "Bust" }
]
var dealerHand = 0

function deal() {

    let firstCard = Math.floor(Math.random() * 10) + 2
    let secondCard = Math.floor(Math.random() * 10) + 2

    cardCounter = 2

    firstCardEl = document.getElementById('first-card')
    secondCardEl = document.getElementById('second-card')

    firstCardEl.textContent = firstCard
    secondCardEl.textContent = secondCard

    //console.log(firstCard, secondCard)
    sumEl = document.getElementById('sum')
    sum = firstCard + secondCard

    sumEl.textContent = sum
    //console.log(sum)
    if (sum === 21) {
        alert("Blackjack! You Win!")
    }

    var cardTable = document.getElementById('cards')
    while (cardTable.rows.length > 2) {
        cardTable.deleteRow(2)
    }
}

function hitMe() {
    cardCounter += 1
    //console.log(cardCounter)


    let newCard = Math.floor(Math.random() * 10) + 2

    var cardTable = document.getElementById('cards')
    var row = cardTable.insertRow(cardCounter - 1)
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    cell1.outerHTML = `<th>Card ${cardCounter}</th>`
    cell2.innerHTML = newCard

    sum = sum + newCard
    sumEl.textContent = sum

}
function stand() {
    let rand = Math.random() * 100 + 1

    switch (true) {
        case (rand <= 14.6):
            dealerHand = 17
            break
        case (rand <= 28.4):
            dealerHand = 18
            break
        case (rand <= 41.9):
            dealerHand = 19
            break
        case (rand <= 59.5):
            dealerHand = 20
            break
        case (rand <= 71.8):
            dealerHand = 21
            break
        default:
            dealerHand = "Bust"
            break
    }

    //console.log("Dealer's Hand: " + dealerHand)

    if (sum > 21 && dealerHand != "Bust") {
        alert("Your Hand: " + sum + "\nDealer's Hand: " + dealerHand + "\nYou bust! You Lose!")
    }
    else if (dealerHand == "Bust" && sum <= 21) {
        alert("Your Hand: " + sum + "\nDealer's Hand: " + dealerHand + "\nDealer busts! You win!")
    }
    else if (dealerHand == "Bust" && sum > 21) {
        alert("Your Hand: " + sum + "\nDealer's Hand: " + dealerHand + "\nBoth Bust! Take back your bet!")
    }
    else if (sum > dealerHand) {
        alert("Your Hand: " + sum + "\nDealer's Hand: " + dealerHand + "\nYou win!")
    }
    else if (sum == dealerHand) {
        alert("Your Hand: " + sum + "\nDealer's Hand: " + dealerHand + "\nDraw! Take back your bet!")
    }
    else {
        alert("Your Hand: " + sum + "\nDealer's Hand: " + dealerHand + "\nDealer wins!")
    }

}