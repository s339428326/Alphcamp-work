// 資料
const movies = [
  {
    title: "The Avengers",
    image:
      "https://assets-lighthouse.alphacamp.co/uploads/image/file/15305/TheAvengersPoster.jpg",
    rating: 0,
  },
  {
    title: "Our Times",
    image:
      "https://assets-lighthouse.alphacamp.co/uploads/image/file/15304/OurtimesPoster.jpeg",
    rating: 0,
  },
  {
    title: "Aquaman",
    image:
      "https://assets-lighthouse.alphacamp.co/uploads/image/file/15303/AquamanPoster.jpg",
    rating: 0,
  },
];

// 選取節點
const dataPanel = document.querySelector("#data-panel");

// 函式
function displayMovieList(movies) {
  let htmlContent = `
      <table class="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
      `;
  for (let i = 0; i < movies.length; i++) {
    htmlContent += `
          <tr>
            <td>
              <img src="${movies[i].image}" width="70" class="img-thumbnail">
            </td>
            <td>${movies[i].title}</td>
            <td>
              <span class="fa fa-thumbs-up"></span>
              <span class="fa fa-thumbs-down px-2"></span>
              <span>${movies[i].rating}</span>
            </td>
            <td>
              <button class="btn btn-sm btn-danger">X</button>
            </td>
          </tr>
        `;
  }
  htmlContent += `
        </tbody>
      </table>
    `;
  return htmlContent;
}

// 將組合好的字串傳回節點，修改內容
dataPanel.innerHTML = displayMovieList(movies);

//////////Answer there////////////
const btnUp = document.querySelectorAll(".fa-thumbs-up");
const btnDown = document.querySelectorAll(".fa-thumbs-down");
const remove = document.querySelectorAll(".btn-danger");

remove.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const tr = e.target.parentElement.parentElement;
    tr.remove();
  });
});

btnUp.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let td = e.target.parentElement;
    let rating = Number(td.children[2].innerHTML);
    rating++;
    td.children[2].innerHTML = `${rating}`;
  });
});

btnDown.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let td = e.target.parentElement;
    let rating = Number(td.children[2].innerHTML);
    if (rating > 0) {
      rating--;
      td.children[2].innerHTML = `${rating}`;
    }
  });
});
