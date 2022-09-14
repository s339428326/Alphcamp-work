const date = [
  {
    name: "Guillaume Vincent",
    email: "guillaume.vincent@example.com",
    gender: "male",
    age: "25",
    region: "CH",
    birthday: "1995-05-05",
    avatar:
      "https://assets-lighthouse.alphacamp.co/uploads/image/file/15982/man_02.png",
  },
];

// 方法一 透過seletctor選出需要擷取的地方.value改變
// 將所有要取值的地方增加相同的class

const name = document.querySelectorAll(".name");

for (let index in name) {
  name[index].innerText = date[index].name;
}
