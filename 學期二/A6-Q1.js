function createPlayer(name, hp, mp) {
  return {
    name: name,
    hp: hp,
    mp: mp,
    cure: function (hp) {
      // write your code here
      // hint: 1. 在動手寫 code 之前，試著先列出有哪些可能性，再設計 if-else 邏輯 2. 魔法師和戰士補的血量不同，需要根據不同的補血量扣除不同的 MP
      // mp 判斷
      let calMp = hp * 2;
      if (this.hp > 0 && this.mp > calMp) {
        this.mp -= calMp;
        this.hp += hp;
        return `${this.name} HP recovered! (HP = ${this.hp}, MP = ${this.mp})`;
      } else if (this.hp <= 0) {
        return `${this.name} cannot use cure after death`;
      } else if (this.mp < calMp) {
        return `${this.name} can't use cure, but insufficient mp ${
          calMp - this.mp
        } `;
      }
    },
    attack: function (enemy) {
      // write your code here
      // hint: 在動手寫 code 之前，試著先列出有哪些可能性，再設計 if-else 邏輯
      let damge = Math.floor(Math.random() * 100) + 1;
      enemy.hp -= damge;
      if (enemy.hp > 0) {
        return `${this.name} hit ${enemy.name}. ${enemy.name} lose ${damge}hp, ${enemy.name} still alive. (HP = ${enemy.hp})`;
      }
      if (enemy.hp < 0) {
        return `${this.name} hit ${enemy.name}. ${enemy.name} lose ${damge}hp, ${enemy.name} is dead. (HP = ${enemy.hp})`;
      }
    },
  };
}
console.log("====== CREATE PLAYERS ======");
const magician = createPlayer("Magician", 100, 100);
const warrior = createPlayer("Warrior", 100, 30);
console.log(magician); // {name: "Magician", hp: 30, mp: 100}
console.log(warrior); // {name: "Warrior", hp: 100, mp: 30}
console.log("====== START FIGHT ======");
while (warrior.hp > 0 && magician.hp > 0) {
  // 戰士先攻
  console.log(warrior.attack(magician));
  console.log(magician.cure(20)); // 魔法師補血 20 點
  // 魔法師後攻
  if (magician.hp > 0) {
    console.log("Change sides \n");
    console.log(magician.attack(warrior));
    console.log(warrior.cure(10)); // 戰士補血 10 點
  }
  console.log("======");
}
console.log("GAME OVER.");
