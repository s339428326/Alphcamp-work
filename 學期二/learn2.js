const players = [
  { name: "Bernard", email: "bernard@example.com", ticket: "XL3558" },
  { name: "Youchi", email: "youchi@example.com", ticket: "AH9188" },
  { name: "Yenting", email: "yenting@example.com", ticket: "LO9903" },
  { name: "Angela", email: "angela@example.com", ticket: "HY7212" },
  { name: "Yvonne", email: "yvonne@example.com", ticket: "CH7684" },
  { name: "Ellen", email: "ellen@example.com", ticket: "BB1750" },
  { name: "Walter", email: "walter@example.com", ticket: "EI5724" },
  { name: "Walter", email: "walter@example.com", ticket: "EI5724" },
  { name: "Tim", email: "tim@example.com", ticket: "CK4592" },
  { name: "Kevin", email: "kevin@example.com", ticket: "TT1804" },
  { name: "Russell", email: "russell@example.com", ticket: "SI0305" },
];

const blackList = [
  { name: "Tim", email: "tim@example.com", ticket: "CK4592" },
  { name: "Walter", email: "walter@example.com", ticket: "EI5724" },
];
// write your code
for (let i = players.length - 1; i >= 0; i--) {
  for (let j = 0; j < blackList.length; j++) {
    if (players[i].email === blackList[j].email) {
      players.splice(i, 1);
    }
  }
}


