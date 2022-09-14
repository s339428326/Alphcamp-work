const slider = document.querySelectorAll("#Range");
const body = document.querySelector("body");
const hexViewer = document.querySelector(".hex-viewer");

slider.forEach((item) => {
  item.addEventListener("input", (e) => {
    const sliderContainer = e.target.parentElement;
    let sliderValue = sliderContainer.children[2];
    sliderValue.innerHTML = e.target.value;
    let hexNumber = colorNumber();
    body.style = `background-color: #${hexNumber}`;
    hexViewer.innerHTML = `#${hexNumber}`;
  });
});

function colorNumber() {
  let result = "";
  const label = document.querySelectorAll("label");
  label.forEach((item) => {
    let decNumber = Number(item.innerHTML);
    let hexNumber = decNumber.toString(16);
    if (hexNumber.length === 1) {
      hexNumber = "0" + hexNumber;
    }
    result += hexNumber;
  });
  //   console.log(result.toUpperCase());
  return result.toUpperCase();
}

// let t = "000000";
// body.style = `background-color: #${t}`;
