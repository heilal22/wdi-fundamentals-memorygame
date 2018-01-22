//cards array
var cards = [
  { rank: "queen",
    suit: "hearts",
    cardIdImage: "images/queen-of-hearts.png"
  },
  { rank: "queen",
    suit: "diamonds",
    cardIdImage: "images/queen-of-diamonds.png"
  },
  { rank: "king",
    suit: "hearts",
    cardIdImage: "images/king-of-hearts.png"
  },
  { rank: "king",
    suit: "diamonds",
    cardIdImage: "images/king-of-diamonds.png"
  }
];

//cards in Play array
var cardsInPlay = [];

//checking for match function
var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
    alert("You found a match!");}
    else {
      console.log("Sorry, try again.");
      alert("Sorry, try again.");}
  };

//flipping card function
  var flipCard = function () {
  cardId = this.getAttribute('data-id');
  console.log(cardId);
  cardsInPlay.push(cards[cardId].rank);

//show card image
  this.setAttribute('src', cards[cardId].cardIdImage);
  //two cards played?
  if (cardsInPlay.length === 2) {checkForMatch();
//reset
cardsInPlay = [];
  }
  };
//create Board function
var createBoard = function() {
//loop
for (var i = 0; i < cards.length; i++) {
  //image element
var cardElement = document.createElement('img');
cardElement.setAttribute('src', 'images/back.png');
cardElement.setAttribute('data-id', i);
cardElement.addEventListener('click', flipCard);
document.getElementById('game-board').appendChild(cardElement);
}
}

createBoard();
