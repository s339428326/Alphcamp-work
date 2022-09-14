const tbody = document.querySelectorAll("tbody tr");

// for (let i = 0; i < 5; i++) {
//   for (let j = 1; j < 6; j++) {
//     console.log(tbody.children[i].children[j].innerHTML);
//     if (tbody.children[i].children[j].innerHTML >= 20) {
//       tbody.children[i].children[j].innerHTML +=
//         '<i class="fa fa-thumbs-up"></i>';
//     }
//   }
// }

// if (item.children[1].innerHTML >= 20) {
//   item.children[1].innerHTML += '<i class="fa fa-thumbs-up"></i>';
// }

tbody.forEach((item) => {
  if (item.children[1].innerHTML >= 20) {
    item.children[0].innerHTML += '<i class="fa fa-thumbs-up"></i>';
  }
});
