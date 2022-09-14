let a = Number(prompt('輸入第一個邊長'));
let b = Number(prompt('輸入第二個邊長'));
let c = Number(prompt('輸入第三個邊長'));


// (a === b) !== c || (a === c) !== b || (b === c) !== a
if((a + b > c) && (b + c > a) && (a + c > b)){
    if((a === b) && (b === c)){
        alert('正三角形');
    }else if((a !== b) && (b !== c) && (c !== a)){
        alert('不等邊三角形');
    }else{
        alert('等腰三角形');
    }
  }else{
   alert('invalid');
  }