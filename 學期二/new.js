function createPlayer(name, hp, mp) {
  return {
    name: name,
    hp: hp,
    mp: mp,
    cure: function (hp) {},
    attack: function (enemy) {
      let damge = Math.floor(Math.random() * 100) + 1;
      enemy.hp -= damge;
      return enemy.hp;
    },
  };
}

const magician = createPlayer("Magician", 30, 100);
const warrior = createPlayer("Warrior", 100, 30);
console.log(magician); // {name: "Magician", hp: 30, mp: 100}
console.log(warrior); // {name: "Warrior", hp: 100, mp: 30}
console.log("====== START FIGHT ======");
console.log(warrior.attack(magician));

let x = "132";

console.log((x = "324"));
