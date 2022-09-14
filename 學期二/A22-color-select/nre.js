// 作業題目指定規格：
// 使用者要輸入一個 > 0, <= 100 的數字
// 電腦會猜一個 >0, <=100 的數字一百次
// 比較電腦跟使用者的數字，如果剛好顯示 Win ，太大顯示 too big ，太小顯示 too small
// 如果在一百次內使用者數字剛好等於電腦的數字，則停止程式
let input = 0;
let answer = 0;

while (true) {
  input = prompt("Guess number");
  answer = parseInt(input, 10);
  if (!isNaN(answer)) {
    console.log("nan");
  }
  if (!isNaN(answer) && answer <= 100 && answer > 0) {
    console.log(`Answer is: ${answer}`);
    break;
  }
}

let count = 0;
while (count < 100) {
  // to avoid infinite loop
  let comAnswer = Math.floor(Math.random() * 100);
  console.log(
    `#${count + 1}: Computer guess: ${comAnswer}, ${checkAnswer(comAnswer)}`
  );
  count++;
}

function checkAnswer(guess) {
  if (guess === answer) {
    return "Win!";
  } else if (guess > answer) {
    return "too bigger!";
  } else {
    return "too small!";
  }
}
