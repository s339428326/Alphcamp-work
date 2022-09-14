//q1
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

let ticket = "";
let RandomNumber = Math.floor(Math.random() * 10000);

function random(x) {
  let RadomCharacter = Math.round(Math.random() * x);
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

let result = ticketRandomNumber();
console.log(result);

//q2
// input
let name = "Bernard";
// write your code
let cal = name.length - 2;
let hiddename = name.slice(0, 2);
for (let i = 0; i < cal; i++) {
  hiddename += "*";
}

// output
console.log(hiddename);

function encodeName() {
  let name = "Bernard";
  // write your code
  let cal = name.length - 2;
  let hiddename = name.slice(0, 2);
  for (let i = 0; i < cal; i++) {
    hiddename += "*";
  }
}

//q3
let email = "bernard@example.com";
// write your code
let postion = email.indexOf("@");
let name_1 = email.slice(0, postion - 3);
let after = email.slice(postion, email.length);
email = name_1 + "..." + after;

console.log(email);
function encodeEmail() {
  let email = "bernard@example.com";
  // write your code
  let postion = email.indexOf("@");
  let name_1 = email.slice(0, postion - 3);
  let after = email.slice(postion, email.length);
  email = name_1 + "..." + after;
}

//remove
const players = [
  "Bernard",
  "Youchi",
  "Yenting",
  "Angela",
  "Yvonne",
  "Ellen",
  "Walter",
  "Walter",
  "Tim",
  "Kevin",
  "Russell",
];

const blackList = ["Walter", "Tim"];
// write your code
console.log(players);
// should be ["Bernard", "Youchi", "Yenting", "Angela", "Yvonne", "Ellen", "Kevin", "Russell"]

for (let i = players.length - 1; i >= 0; i--) {
  if (blackList.includes(players[i])) {
    players.splice(i, 1);
  }
}
console.log(players);
