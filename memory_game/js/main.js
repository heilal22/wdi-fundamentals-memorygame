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
  if (cardsInPlay[0] === cardsInPlay[1]) {console.log("You found a match!");}
  else {console.log("Sorry, try again.");}
  };

//flipping card function
  var flipCard = function (cardId) {
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardIdImage);
  console.log(cards[cardId].suit);
  if (cardsInPlay.length === 2) {checkForMatch();}
  };


flipCard(0);
flipCard(2);
