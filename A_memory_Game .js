const cardArray = [
  {
    name: "Bulbasur",
    img: "img/00.jpg",
  },
  {
    name: "Charmander",
    img: "img/01.jpg",
  },
  {
    name: "Squirel",
    img: "img/02.jpg",
  },
  {
    name: "Pedget",
    img: "img/03.jpg",
  },
  {
    name: "Pikachu",
    img: "img/04.jpg",
  },
  {
    name: "Snake",
    img: "img/05.jpg",
  },
  {
  name: "Bulbasur",
    img: "img/00.jpg",
  },
  {
    name: "Charmander",
    img: "img/01.jpg",
  },
  {
    name: "Squirel",
    img: "img/02.jpg",
  },
  {
    name: "Pedget",
    img: "img/03.jpg",
  },
  {
    name: "Pikachu",
    img: "img/04.jpg",
  },
  {
    name: "Snake",
    img: "img/05.jpg",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector('#result')

let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "img/00_0.jpg");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);

    gridDisplay.appendChild(card);
    console.log(card, i);
  }
}

createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("img");

  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];

  console.log(cards);
  console.log("check for match");

  if ((optionOneId == optionTwoId)) {
    cards[optionOneId].setAttribute('src', 'img/00.0.jpg')
    cards[optionTwoId].setAttribute('src', 'img/00.0.jpg')
    alert("You have the same images");
  }

  if (cardsChosen[0] == cardsChosen[1]) {
    alert("You found a match");
    cards[cardsChosenIds[0]].setAttribute("src", "img/blank.jpg");
    cards[cardsChosenIds[1]].setAttribute("src", "img/blank.jpg");
    cards[cardsChosenIds[0]].removeEventListener("click", flipCard);
    cards[cardsChosenIds[1]].removeEventListener("click", flipCard);
    
    cardsWon.push(cardsChosen);
   


  } else {
    cards[optionOneId].setAttribute("src", "img/00_0.jpg");
    cards[optionTwoId].setAttribute("src", "img/00_0.jpg");
    alert("sorry try again ");
  }

  
  resultDisplay.textContent = cardsWon.length
  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length == cardArray.length/2){
    resultDisplay.textContent='congratulations you found them all!'
  }
}

function flipCard() {
  console.log(cardArray);
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);

  console.log(cardsChosen);
  console.log(cardsChosenIds);

  this.setAttribute("src", cardArray[cardId].img);

  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
