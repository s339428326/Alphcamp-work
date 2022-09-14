// 初始變數
let list = document.querySelector("#my-todo");
let addBtn = document.querySelector("#add-btn");
let input = document.querySelector("#new-todo");

// 資料
const todos = [
  "Hit the gym",
  "Read a book",
  "Buy eggs",
  "Organize office",
  "Pay bills",
];

for (let todo of todos) {
  addItem(todo);
}

// 函式
function addItem(text) {
  let newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  list.appendChild(newItem);
}

// write your code here
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value.length > 0) {
    addItem(input.value);
    todos.push(input.value);
  }
  input.value = "";
});

list.addEventListener("click", function (event) {
  let target = event.target;
  if (target.classList.contains("delete")) {
    let parentElement = target.parentElement;
    parentElement.remove();
  } else if (target.tagName === "LABEL") {
    //新增這裡
    target.classList.toggle("checked");
  }
});
