/*
  2022.7.20
  Time:5 hr.
 */
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
  { name: "Russell", email: "Russell@example.com" },
];

let checkTicketbox = [];

function drawWinner(players, prize) {
  let newPlayer = [];
  while (players.length > 0) {
    let winner = randomMember();
    newPlayer.push(winner[0]);
  }
  let numberArray = ticketNumberArray(newPlayer.length - 1);
  for (let index in newPlayer) {
    newPlayer[index].number = numberArray[index];
  }
  return newPlayer;
}

let newPlayers = drawWinner(players);

const prize = ["頭獎", "貮獎", "叁獎"];
function announceMsg(winner, prize) {
  for (let index in winner) {
    if (index < 3) {
      console.log(
        `${winner[index].number} | ${hidddenName(
          winner[index].name
        )} | ${hiddenEmail(winner[index].email)} | ${prize[index]}`
      );
    } else {
      console.log(
        `${winner[index].number} | ${hidddenName(
          winner[index].name
        )} | ${hiddenEmail(winner[index].email)} | ${"參加獎"}`
      );
    }
  }
}

announceMsg(newPlayers, prize);

function randomMember() {
  let random = Math.floor(Math.random() * players.length);
  let winner = players.splice(random, 1);
  return winner;
}

// hidden information
function hidddenName(name) {
  const hiddenLength = name.length - 2;
  let hiddenName = name.slice(0, 2);
  for (let i = 0; i < hiddenLength; i++) {
    hiddenName += "*";
  }
  return hiddenName;
}

//
function hiddenEmail(email) {
  const mouseIndex = email.indexOf("@");
  const name = email.slice(0, mouseIndex);
  const emailAfter = email.slice(mouseIndex, email.length);
  const emailInFront = name.slice(0, name.length / 2);
  return emailInFront + "..." + emailAfter;
}

function RandomTicketNumber() {
  // AA1234
  let result = "";
  const chr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const number = "0123456789";
  for (let i = 0; i < 2; i++) {
    let random = Math.round(Math.random() * 25);
    result += chr[random];
  }
  for (let i = 0; i < 4; i++) {
    let random = Math.round(Math.random() * 9);
    result += number[random];
  }
  return result;
}

function checkNumber(Number) {
  for (let index in checkTicketbox) {
    if (checkTicketbox.includes(Number)) {
      return false;
    }
  }
  checkTicketbox.push(Number);
  return true;
}

function ticketNumberArray(quantity) {
  let ticketNumber;
  for (let i = 0; i < quantity; i++) {
    ticketNumber = RandomTicketNumber();
    if (!checkTicketbox.includes(ticketNumber)) {
      checkTicketbox.push(ticketNumber);
    } else {
      let check = checkNumber(ticketNumber);
      while (!check) {
        ticketNumber = RandomTicketNumber();
        check = checkNumber(ticketNumber);
      }
    }
  }
  return checkTicketbox;
}

