const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
//getContext() 會回傳一個canvas 的 drawing context
//drawing context可以用來畫圖
const unit = 20;
const row = canvas.height / unit;
const column = canvas.width / unit;
//初始蛇的位置
let snake = [];
function createSnake(){
    snake[0] = {
        x: 80, 
        y: 0, 
    }
    snake[1] = {
        x: 60, 
        y: 0, 
    }
    snake[2] = {
        x: 40, 
        y: 0, 
    }
    snake[3] = {
        x: 20, 
        y: 0, 
    };
}
class Fruit {
    constructor(){
        this.x = Math.floor(Math.random() * column) * unit;
        this.y = Math.floor(Math.random() * row) * unit;
    }
    drawFruit(){
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, unit, unit);
    }
    //重選果實位置
    pickALocation(){
        let overlapping = false;
        let newX;
        let newY;

        function checkOverlap(newX, newY){
            for (let i = 0; i < snake.length; i++){
                if (newX == snake[i].x && newY == snake[i].y){
                    overlapping = true;
                    return;
                    //如果蛇其中一格的身體位置跟果實位置重複時回應 true
                } else {
                    overlapping = false;
                }
            }
        }

        // 當 while 條件為 true 時重複執行，直到結果為 false
        do {
            //隨機選擇位置
            newX = Math.floor(Math.random() * column) * unit;
            newY = Math.floor(Math.random() * row) * unit;
            //確認位置是否有問題，若有問題回應true，讓迴圈再跑一次
            checkOverlap(newX, newY);
        } while (overlapping);

        this.x = newX;
        this.y = newY;
    }
}

// 初始設定
createSnake();
let myFruit = new Fruit();
window.addEventListener("keydown", changeDirection);
let d = "right"; //蛇跑動的預設方向

let score = 0;
let hightestScore;
loadHightestScre();
document.getElementById("score").innerHTML = "遊戲分數：" + score;
document.getElementById("hightestScore").innerHTML = "最高分數：" + hightestScore;

//改變蛇方向
function changeDirection(e){
    if (e.key == "ArrowLeft" && d != "right"){
       d = "left";
    } else if (e.key == "ArrowRight"  && d !== "left"){
        d = "right";
    } else if (e.key == "ArrowUp"  && d != "down"){
        d = "up";
    } else if (e.key == "ArrowDown"  && d != "up"){
        d = "down";
    }
    /* 若手速過快，在畫出下一禎畫面前，可讓蛇多次轉方向碰到自己，造成邏輯上死亡
    這可讓重畫畫面之前不接受多次的 keydown 事件, 防止這種情況
    因為監聽事件是放在重畫畫面的 function 外，因此要補充一個監聽事件到畫圖function尾巴
    */
    window.removeEventListener("keydown", changeDirection);

}

//畫面
function draw(){
    //每次畫蛇之前，確認蛇有沒有咬到自己
    // i 由 1 開始是因為確認的位置不含蛇的頭，因此要少算第 0 項
    for (let i = 1; i < snake.length; i++){
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(game); //結束定期重畫遊戲
            alert("遊戲結束");
            return;
        }
    }
    //重畫背景為黑色
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // 畫出果實位置
    myFruit.drawFruit();
    //畫蛇
    for(let i = 0; i < snake.length; i++){
        if (i == 0){
            ctx.fillStyle = "lightgreen";
        } else {
            ctx.fillStyle = "pink"
        }
        ctx.strokeStyle = "white" //border-color
    
        //超出範圍外的蛇穿牆
        if (snake[i].x >= canvas.width){
            snake[i].x = 0;
        }
        if (snake[i].x < 0){
            snake[i].x = canvas.width - unit;
        }
        if (snake[i].y >= canvas.height){
            snake[i].y = 0;
        }
        if (snake[i].y < 0){
            snake[i].y = canvas.height - unit;
        }

        //x, y, width, height 劃出每個身體的顏色、位置
        ctx.fillRect(snake[i].x, snake[i].y, unit, unit);
        ctx.strokeRect(snake[i].x, snake[i].y, unit, unit);
    }

    // 以目前 d 方向，決定下一個要放在哪
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    if (d == "left"){
        snakeX -= unit;
    } else if (d == "right"){
        snakeX += unit;
    } else if (d == "up"){
        snakeY -= unit;
    } else if (d == "down"){
        snakeY += unit;
    }
    let newHead = {
        x: snakeX, 
        y: snakeY,
    };
    
    //確認是否吃到果實
    if (snake[0].x == myFruit.x && snake[0].y == myFruit.y){
        //確認是否吃到, 重刷果子位置
        myFruit.pickALocation();
        //更新分數
        score++;
        setHightestScore(score);
        document.getElementById("score").innerHTML = "遊戲分數：" + score;
    } else {
        // 沒吃到
        // 移除最後一格身體，在前進一格時，保持原有長度
        snake.pop();
    }

    snake.unshift(newHead); //每秒移動頭的位置
    window.addEventListener("keydown", changeDirection);
}    

//setInterval每隔一段時間重複執行function (單位毫秒)
let game = setInterval(draw, 100);

function loadHightestScre(){
    if (localStorage.getItem("hightestScore") == null){
        hightestScore = 0;
    } else {
        hightestScore = Number(localStorage.getItem("hightestScore"));
    }
}
function setHightestScore(score){
    if (score > hightestScore){
        localStorage.setItem("hightestScore", score);
        hightestScore = score;
        document.getElementById("hightestScore").innerHTML = "最高分數：" + hightestScore;
    }
}