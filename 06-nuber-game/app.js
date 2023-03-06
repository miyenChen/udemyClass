let score = Math.floor(Math.random() * 100);
let minScore = 0;
let maxScore = 99;

while (true) {
    let guess = Number(prompt('請輸入' + minScore + '~' + maxScore + '之間的數字'));

    if (guess < minScore || guess > maxScore) {
        alert('無效猜測，請重新猜測一個數值');
        continue;
    }

    if (guess == score) {
        alert('恭喜猜對，秘密數值是 ' + score);
        break;
    } else if (guess < score) {
        minScore = guess;
    } else if (guess > score) {
        maxScore = guess;
    }
}
