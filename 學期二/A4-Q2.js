const players = [
  { name: "Bernard", email: "bernard@example.com", number: "XL3558" },
  { name: "Youchi", email: "youchi@example.com", number: "AH9188" },
  { name: "Yenting", email: "yenting@example.com", number: "LO9903" },
  { name: "Angela", email: "angela@example.com", number: "HY7212" },
  { name: "Yvonne", email: "yvonne@example.com", number: "CH7684" },
  { name: "Ellen", email: "ellen@example.com", number: "BB1750" },
  { name: "Walter", email: "walter@example.com", number: "EI5724" },
  { name: "Kevin", email: "kevin@example.com", number: "TT1804" },
  { name: "Tim", email: "tim@example.com", number: "CK4592" },
  { name: "Russell", email: "russell@example.com", number: "SI0305" },
];

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

function drawWinner(players) {
  let random = Math.floor(Math.random() * players.length);
  let randomPlayer = players.splice(random, 1);
  return `${randomPlayer[0].number} | ${encodeName(
    randomPlayer[0].name
  )} | ${encodeEmail(randomPlayer[0].email)}`;
}

console.log(drawWinner(players));
console.log(drawWinner(players));
console.log(drawWinner(players));
console.log(drawWinner(players));
console.log(drawWinner(players));
