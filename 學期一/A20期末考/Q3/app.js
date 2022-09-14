let count = 0;

for(let i = 1; i <= 9; i++ ){
        for(let j = 1; j <= 9; j++){
            if((i * 2 > j) && (i !== j) && (i * 2 + j <= 20)){
                count++;
                console.log(`發現等邊三角形！三邊長分別為: ${a}、${a}、${b}`);
            }
        }
}

console.log(`共找到 ${count} 組等腰三角形`);


/*
for i = 1 to i <= 9
    for j = 1 to i <= 9
        if((等邊和 > 第三邊) AND (等邊 !== 第三邊) AND (等邊和 + 第三邊 <= 20)
    end for
end for
*/