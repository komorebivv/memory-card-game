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
    
    var textWrapper = document.querySelector('.ml2');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


    let chosenCards = [];
    let cardsChosenId = [];
    let cardsWon = [];

    function start() {
        const start = document.querySelector('.start');
        document.getElementById('startButton').addEventListener('click', createBoard)
        document.getElementById('startButton').addEventListener('click', () => start.remove())

    }



function createBoard() {
    document.getElementById("afterWon").textContent = "";
    const eventsInGame = document.createElement("div");
    eventsInGame.setAttribute('id', 'eventsInGame')
    document.body.appendChild(eventsInGame)
    eventsInGame.textContent = "SCORE";
    const score = document.createElement('p')
    score.setAttribute('class', 'score');
    score.textContent = parseInt(0);
    console.log(typeof score);
    parseInt(score);
    const currentEvent = document.createElement('p')
    currentEvent.setAttribute('class', 'event');
    event.innerHTML = '';
    eventsInGame.appendChild(score)
    eventsInGame.appendChild(currentEvent)
    const board = document.createElement("div");
    board.setAttribute('id', 'board');
    document.body.appendChild(board);


    for (let i = 0; i < cardArray.length; i++) {
    document.getElementById("afterWon").textContent = "";
    cardArray.sort(() => 0.5- Math.random())
      const card = document.createElement('img')
      card.setAttribute('src', 'assets/images/card.jpg')
      card.setAttribute('class', 'card')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      board.appendChild(card)
 
    }
  }

  function flipCard() {
    this.setAttribute('class', 'card flip')
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
    document.querySelector('.event').textContent = "You've clicked the same dog!"
      cards[optionOneId].setAttribute('src', 'assets/images/card.jpg')
      cards[optionTwoId].setAttribute('src', 'assets/images/card.jpg')
      cards[optionOneId].setAttribute('class', 'card')
      cards[optionTwoId].setAttribute('class', 'card')    }
    else if (chosenCards[0] === chosenCards[1]) {
        document.querySelector('.event').textContent = "YOU GOT THIS!";
        let changeScore = document.querySelector('.score').textContent;
        document.querySelector('.score').textContent = parseInt(changeScore) + 4;


        cards[optionOneId].setAttribute('class', 'hiddenCard')
        cards[optionTwoId].setAttribute('class', 'hiddenCard')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(chosenCards)
      } else {
        document.querySelector('.event').textContent = "These dogs are different!"
        let changeScore = document.querySelector('.score').textContent;
        parseInt(changeScore);
        changeScore--;
        console.log(changeScore);
        document.querySelector('.score').textContent = changeScore;
        cards[optionOneId].setAttribute('class', 'card')
        cards[optionTwoId].setAttribute('class', 'card')
        cards[optionOneId].setAttribute('src', 'assets/images/card.jpg')
        cards[optionTwoId].setAttribute('src', 'assets/images/card.jpg')
      }
      chosenCards = []
      cardsChosenId = []
        if  (cardsWon.length === cardArray.length/2) {
            document.getElementById("eventsInGame").textContent = "";
            cardsWon = [];
            const eventsOld = document.getElementById("eventsInGame");
            eventsOld.remove();
            const boardOld = document.getElementById("board");
            boardOld.remove();
            // document.getElementById("board").textContent = "";
            document.getElementById("afterWon").textContent = "YOU WON!";
            let btn = document.createElement('BUTTON');
            btn.innerHTML = "PLAY AGAIN!";                   
            document.body.appendChild(btn); 
            btn.setAttribute('class', 'button');
            btn.addEventListener('click', createBoard);
            btn.addEventListener('click', () => btn.setAttribute('class', 'buttonDisappear'));

      }
    }
}

start()}
)