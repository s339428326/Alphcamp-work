const GAME_STATE = {
  FirstCardAwaits: "FirstCardAwaits",
  SecondCardAwaits: "SecondCardAwaits",
  CardsMatchFailed: "CardsMatchFailed",
  CardsMatched: "CardsMatched",
  GameFinished: "GameFinished",
};

const Symbols = [
  "https://assets-lighthouse.alphacamp.co/uploads/image/file/17989/__.png", // 黑桃
  "https://assets-lighthouse.alphacamp.co/uploads/image/file/17992/heart.png", // 愛心
  "https://assets-lighthouse.alphacamp.co/uploads/image/file/17991/diamonds.png", // 方塊
  "https://assets-lighthouse.alphacamp.co/uploads/image/file/17988/__.png", // 梅花
];

const utility = {
  getRandomNumberArray(count) {
    const number = Array.from(Array(count).keys());
    for (let index = number.length - 1; index > 0; index--) {
      let radomIndex = Math.floor(Math.random() * (index + 1));
      [number[index], number[radomIndex]] = [number[radomIndex], number[index]];
    }
    return number;
  },
};

const model = {
  revealedCards: [],
  score: 0,
  triedTimes: 0,
  isRevealedCardsMatched() {
    return (
      this.revealedCards[0].dataset.id % 13 ===
      this.revealedCards[1].dataset.id % 13
    );
  },
};

const controller = {
  currentState: GAME_STATE.FirstCardAwaits,
  generateCards() {
    view.displayCards(utility.getRandomNumberArray(52));
  },
  dispatchCardAction(card) {
    if (!card.classList.contains("back")) {
      return;
    }
    switch (this.currentState) {
      case GAME_STATE.FirstCardAwaits:
        view.flipCard(card);
        model.revealedCards.push(card);
        console.log(model.revealedCards);
        this.currentState = GAME_STATE.SecondCardAwaits;
        break;
      case GAME_STATE.SecondCardAwaits:
        view.renderTriedTimes(++model.triedTimes);
        view.flipCard(card);
        model.revealedCards.push(card);
        console.log(model.revealedCards);
        console.log("比對", model.isRevealedCardsMatched());
        if (model.isRevealedCardsMatched()) {
          this.currentState = GAME_STATE.CardsMatched;
          view.renderScore((model.score += 10));
          view.pairCard(...model.revealedCards);
          model.revealedCards = [];
          if (model.score === 260) {
            console.log("showGameFinished");
            this.currentState = GAME_STATE.GameFinished;
            view.showGameFinished(); // 加在這裡
            return;
          }
          this.currentState = GAME_STATE.FirstCardAwaits;
        } else {
          this.currentState = GAME_STATE.CardsMatchFailed;
          view.appendWrongAnimation(...model.revealedCards);
          setTimeout(this.restCard, 1000);
        }
        break;
    }
    console.log("this.currentState", this.currentState);
    console.log(
      "revealedCards",
      model.revealedCards.map((paokeCard) => paokeCard.dataset.id)
    );
  },
  restCard() {
    view.flipCard(...model.revealedCards);
    model.revealedCards = [];
    controller.currentState = GAME_STATE.FirstCardAwaits;
  },
};

const view = {
  getCardElement(index) {
    return `<div class="paoke-card back" data-id = "${index}"></div>`;
  },
  getCardContent(index) {
    const number = this.transformNumber((index % 13) + 1);
    const symbol = Symbols[Math.floor(index / 13)];
    return `
            <p>${number}</p>
            <img
            src=${symbol}
            alt="diamonds"
            />
            <p>${number}</p>`;
  },
  transformNumber(number) {
    switch (number) {
      case 1:
        return "A";
      case 11:
        return "J";
      case 12:
        return "Q";
      case 13:
        return "K";
      default:
        return number;
    }
  },
  displayCards(RandomNumberArray) {
    const rootElement = document.querySelector(".paoke-cards");
    rootElement.innerHTML = RandomNumberArray.map((index) =>
      this.getCardElement(index)
    ).join("");
  },
  flipCard(...paokeCards) {
    paokeCards.forEach((item) => {
      if (item.classList.contains("back")) {
        item.classList.remove("back");
        item.innerHTML = this.getCardContent(Number(item.dataset.id));
        return;
      }
      item.classList.add("back");
      item.innerHTML = ``;
    });
  },
  pairCard(...paokeCards) {
    paokeCards.forEach((item) => {
      item.classList.add("paired");
    });
  },
  renderScore(score) {
    document.querySelector(".score").textContent = `Score: ${score}`;
  },
  renderTriedTimes(times) {
    document.querySelector(
      ".tried"
    ).textContent = `You've tried: ${times} times`;
  },
  appendWrongAnimation(...cards) {
    cards.map((card) => {
      card.classList.add("wrong");
      card.addEventListener(
        "animationend",
        (event) => event.target.classList.remove("wrong"),
        { once: true }
      );
    });
  },
  showGameFinished() {
    const div = document.createElement("div");
    div.classList.add("completed");
    div.innerHTML = `
      <p>Complete!</p>
      <p>Score: ${model.score}</p>
      <p>You've tried: ${model.triedTimes} times</p>
    `;
    const header = document.querySelector("header");
    header.before(div);
  },
};

controller.generateCards();

document.querySelectorAll(".paoke-card").forEach((paokeCard) => {
  paokeCard.addEventListener("click", (e) => {
    controller.dispatchCardAction(paokeCard);
    console.log(controller.currentState);
  });
});
