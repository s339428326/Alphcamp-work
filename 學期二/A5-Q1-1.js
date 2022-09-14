// DATA /////////////////////////////////////

const players = [
  { name: "Bernard", email: "bernard@example.com" },
  { name: "Youchi", email: "youchi@example.com" },
  { name: "Yenting", email: "yenting@example.com" },
  { name: "Angela", email: "angela@example.com" },
  { name: "Yvonne", email: "yvonne@example.com" },
  { name: "Ellen", email: "ellen@example.com" },
  { name: "Walter", email: "walter@example.com" },
  { name: "Kevin", email: "kevin@example.com" },
  { name: "Tim", email: "tim@example.com" },
  { name: "Russell", email: "russell@example.com" },
];
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// FUNCTIONS /////////////////////////////////////

function drawWinner(players, prize) {
  let random = Math.floor(Math.random() * players.length);
  let winner = players.splice(random, 1);
  let number = ticketRandomNumber();
  if (checkNumber(number)) {
    winner[0].number = number;
  } else {
    let check = checkNumber(number);
    while (!check) {
      number = ticketRandomNumber();
      check = checkNumber(number);
    }
    winner[0].number = number;
  }
  console.log(announceMsg(winner[0], prize));
}

function announceMsg(winner, prize) {
  // 請新增 encodeName 和 encodeEmail 函式進行字串處理
  return `${winner.number} | ${encodeName(winner.name)} | ${encodeEmail(
    winner.email
  )} | ${prize}`;
}
// add more functions here
const checkArray = [];

function checkNumber(Number) {
  for (let index in checkArray) {
    if (checkArray.includes(Number)) {
      return false;
    }
  }
  checkArray.push(Number);
  return true;
}

function encodeName(name) {
  let cal = name.length - 2;
  let hiddeName = name.slice(0, 2);
  for (let i = 0; i < cal; i++) {
    hiddeName += "*";
  }
  return hiddeName;
}

function encodeEmail(email) {
  let postion = email.indexOf("@");
  let name_1 = email.slice(0, postion / 2);
  let after = email.slice(postion, email.length);
  hiddenEmail = name_1 + "..." + after;
  return hiddenEmail;
}

function random(x) {
  let RadomCharacter = Math.floor(Math.random() * x);
  return RadomCharacter;
}

function ticketRandomNumber() {
  let result = "";
  let TwoRandomCharacter = alphabet[random(26)] + alphabet[random(26)];
  let FourNumbers = random(9999).toString();

  // 補0
  if (FourNumbers.length < 4) {
    let cal = 4 - FourNumbers.length;
    for (let i = 0; i < cal; i++) {
      FourNumbers = "0" + FourNumbers;
    }
  }

  result = TwoRandomCharacter + FourNumbers;
  return result;
}
// EXECUTING /////////////////////////////////////

// each player gets a lottery ticket
// write your code here

// draw 3 winners and announce the results
drawWinner(players, "頭獎");
drawWinner(players, "貮獎");
drawWinner(players, "叁獎");

// the rest of players get participation award
// write your code here
while (players.length > 0) {
  drawWinner(players, "參加獎");
}

//date

let month;
let date;
