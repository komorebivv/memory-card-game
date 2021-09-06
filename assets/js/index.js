document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'dalmatian',
            img: 'assets/images/1.jpg'
        },
        {
            name: 'dalmatian',
            img: 'assets/images/1.jpg'
        },
        {
            name: 'bulldog',
            img: 'assets/images/2.jpg'
        },
        {
            name: 'bulldog',
            img: 'assets/images/2.jpg'
        },
        {
            name: 'shiba',
            img: 'assets/images/3.jpg'
        },
        {
            name: 'shiba',
            img: 'assets/images/3.jpg'
        },
        {
            name: 'pinscher',
            img: 'assets/images/4.jpg'
        },
        {
            name: 'pinscher',
            img: 'assets/images/4.jpg'
        },
        {
            name: 'border-collie',
            img: 'assets/images/5.jpg'
        },
    {
        name: 'border-collie',
        img: 'assets/images/5.jpg'
    },
        {
            name: 'husky',
            img: 'assets/images/6.jpg'
        },
        {
            name: 'husky',
            img: 'assets/images/6.jpg'
        }
    ]



    let chosenCards = [];
    let cardsChosenId = [];
    let cardsWon = [];


function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
    
    document.getElementById("afterWon").textContent = "";
    cardArray.sort(() => 0.5- Math.random())
    const board = document.getElementById('board')
      const card = document.createElement('img')
      card.setAttribute('src', 'assets/images/card.jpg')
      card.setAttribute('class', 'card')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      board.appendChild(card)
      console.log(board)
    }
  }

  function flipCard() {
    let cardId = this.getAttribute('data-id')
    chosenCards.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (chosenCards.length === 2) {
        setTimeout(checkForMatch, 500)
    }

  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
        document.getElementById("eventsInGame").textContent = "You have clicked the same picture!"
      cards[optionOneId].setAttribute('src', 'assets/images/card.jpg')
      cards[optionTwoId].setAttribute('src', 'assets/images/card.jpg')    }
    else if (chosenCards[0] === chosenCards[1]) {
        document.getElementById("eventsInGame").textContent = "YOU GOT THIS!"
        cards[optionOneId].setAttribute('class', 'hiddenCard')
        cards[optionTwoId].setAttribute('class', 'hiddenCard')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(chosenCards)
      } else {
        document.getElementById("eventsInGame").textContent = "This dogs are different!"

        cards[optionOneId].setAttribute('src', 'assets/images/card.jpg')
        cards[optionTwoId].setAttribute('src', 'assets/images/card.jpg')
      }
      chosenCards = []
      cardsChosenId = []
        if  (cardsWon.length === cardArray.length/2) {
            document.getElementById("eventsInGame").textContent = "";
            cardsWon = [];
            document.getElementById("board").textContent = "";
            document.getElementById("afterWon").textContent = "BRAWO UDAŁO CI SIE!";
            let btn = document.createElement('BUTTON');
            btn.innerHTML = "PLAY AGAIN!";                   
            document.body.appendChild(btn); 
            btn.setAttribute('class', 'button');
            btn.addEventListener('click', createBoard);
            btn.addEventListener('click', () => btn.setAttribute('class', 'buttonDisappear'));

      }
    }
}

createBoard()
})