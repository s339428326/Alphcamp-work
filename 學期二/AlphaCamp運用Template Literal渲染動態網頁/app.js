let players = [
  { name: "櫻木花道", pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
  { name: "流川楓", pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
  { name: "赤木剛憲", pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
  { name: "宮城良田", pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
  { name: "三井壽", pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 },
];

const dataPanel = document.querySelector("#data-panel");

// write your code here

function displayPlayerList(list) {
  let table = "<tr>";
  list.forEach((player) => {
    for (let index in player) {
      if (index === "name") {
        table += `
        <td>
            ${player[index]}
        </td>
        `;
      } else {
        table += `
        <td>
            <span style="font-size: 25px">${player[index]}</span>
            <i class="fa fa-plus-circle up"></i>
            <i class="fa fa-minus-circle down"></i>
        </td>
        `;
      }
    }
    table += "</tr>";
  });
  dataPanel.innerHTML += table;
  return table;
}

displayPlayerList(players);

let playerList = [
  { name: "櫻木花道", pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
  { name: "流川楓", pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
  { name: "赤木剛憲", pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
  { name: "宮城良田", pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
  { name: "三井壽", pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 },
];

playerList.forEach((player, index) => {
  console.log(player.ast);
});
