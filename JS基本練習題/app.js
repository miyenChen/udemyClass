//URL('https://yuhsien.notion.site/179caa9730284da48b0a6df66886a447#3ccaeb6faee04eea9f8e50d79381a590')

///////////////////////////////////////////////////////////////
// // arrary 反轉陣列
// 試試看，用課程學過的語法，將一個array內部的所有元素反過來!
// (禁止使用Array.prototype.reverse()。另外，考慮時間複雜度，需要在O(n)內，不能是O(n^2))

// 例如:
// const friends = ["Harry", "Ron", "Snap", "Mike", "Grace"];
// 會變成
// ["Grace", "Mike", "Snap","Ron","Harry"];


// const friends = ["Harry", "Ron", "Snap", "Mike", "Grace"];
// const reversed_friends = [];

// for (let i = friends.length - 1; i >= 0 ; i--) {
//     let value = friends.pop();
//     console.log(value);
//     reversed_friends.push(value);
// }
// console.log(reversed_friends);

// //////////////////////////

// const friends = ["Harry", "Ron", "Snap", "Mike", "Grace"];
// const reversed_friends = [];
// const times = friends.length;
// for (let i = 0; i < times ; i++) {
//     let value = friends.pop();
//     console.log(value);
//     reversed_friends.push(value);
// }

// console.log(reversed_friends);

///////////////////////////////////////////////////////////////
// // 找出陣列中最大的值
/*
在這個coding練習裡面，你要寫一個函式，他可以接受一個parameter，參數是一個array of numbers。
這個函式要return一個值，也就是Array當中最大的數! 若是 input是一個 empty array，則return undefined。
例如：

findBiggest([15, 20, 22, 16, 7]); // return 22
findBiggest([1, 2, 3, 4, 5, 999]); // return 999
findBiggest([-11, 0, -3, -4, -5, -999]); // return 0
findBiggest([]); // return undefined
*/
// function findBiggest(arr) {
//     let biggestNumber = arr[0];
//     for (let i = 0 ; i < arr.length; i++){
//         for (let j = 0 ; j < arr.length; j++){
//             // console.log(biggestNumber, arr[j]);

//             if (arr[j] > biggestNumber){
//                 biggestNumber = arr[j];
//             }
//         }
//     }
//     return biggestNumber;
//   }
// console.log(findBiggest([3, 5, 6])); 

///////////////////////////////////////////////////////////////
/*
addUpTo() 這個函式有大於0的參數 n，n為一個正整數。 addUpTo() 要 return 1 + 2 + 3 + ..... + n 的值。

例如:
addUpTo(5) = 1 + 2 + 3 + 4+ 5 = 15
addUpTo(100) = 1 + 2 + 3 + 4 + 5 + ....... + 100 = 5050

addUpTo(5); // 15
addUpTo(100); // 5050
addUpTo(5000); // 12502500
addUpTo(100000); // 5000050000
*/
// //直接套數學公式
// function addUpTo(n) {
//     result = n / 2 * (n + 1);
    
//     return result;
// }
// console.log(addUpTo(5000));

// function addUpTo(n) {
//     let result = 0;
//     for (let i = 1; i <= n; i++){
//         result = result + i;
//     }
//     return result;
// }
// console.log(addUpTo(5000));


///////////////////////////////////////////////////////////////
// parent.01
///////////////////////////////////////////////////////////////

// 1.編寫一個名為“printEvery3()”的函式，它打印出等差數列 1, 4, 7, …, 88。
// function printEvery3(){
//     for (let i = 1; i <= 88 ; i+= 3){
//         console.log(i);
//     }
// }
// printEvery3();

///////////////////////////////////////////////////////////////
// // 2.編寫一個名為table9to9的函式，它打印出九九乘法表的內容。
// function table9to9(){
//     for (let i = 1; i < 10; i++){
//         for (let j = 1; j < 10; j++){
//             console.log(i + " x " + j + " = " + i*j);
//         }
//     }
// }
// table9to9();

///////////////////////////////////////////////////////////////
// 3. 編寫一個名為isUpperCase的函式，唯一的參數是一個String，其功能為來檢查參數中String的第一個字母是否為大寫。
// <my answer>
// let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// function isUpperCase(str){
//     let answer;
//     for (let i = 0; i < 26 ;i++){
//         // console.log(upperCase[i]);

//         if (str[0] == upperCase[i]){
//             answer = true;
//             break;
//         }else{
//             answer = false;
//         }
//     }
//     return answer;
// }
// console.log(isUpperCase("YBCD"));

//<teacher answer>
// function isUpperCase(str){
//     if (str.length == 0){
//         return false;
//     }

//     // if (str[0] == str[0].toUpperCase()){
//     //     return true;
//     // }else{
//     //     return false;
//     // }
//     return str[0] == str[0].toUpperCase();
// }

// console.log(isUpperCase("sAa"));

///////////////////////////////////////////////////////////////
// 4.編寫一個名為isAllUpperCase的函式，唯一的參數是一個String，其功能為來檢查參數中String的所有字母是否為大寫。
//<my>
// let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// function isUpperCase(str){
//     let answer = 0;
//     for (let n = str.length - 1; n >= 0; n--){

//         for (let i = 0; i < 26 ;i++){
            
//             if (str[n] == upperCase[i]){
//                 answer++;
//                 break;
//             }else{
//                 continue
//             }
//         }
//     }
//     if (answer == str.length){
//         return true;
//     }else{
//         console.log(answer, str.length);
//         return false;
//     }
// }
// console.log(isUpperCase("YafED"));

//<teacher>
// function isAllUpperCase(str){
//     if (str.length == 0){
//         return false;
//     }

//     for (let i = 0; i < str.length; i++){
//         if (str[i] != str.toUpperCase()){
//             return false;
//         }
//     }
//     return true;
// }

///////////////////////////////////////////////////////////////
/*5. 編寫一個名為position的函式，唯一的參數是一個String，
其功能為找到參數String當中的第一個大寫字母，並且回傳大寫字母的值以及其index位置。*/

// function position(str){
//     for (let i = 0; i < str.length; i++){
//         if (str[i] == str[i].toUpperCase()){
//             return str[i] + " " + i;
//         }
//     }
//  return -1;
// }
// console.log(position("raWrfGs"));

///////////////////////////////////////////////////////////////
/* 6.編寫一個名為findSmallCount的函式，其參數為一個整數的array以及另一個整數，
功能是回傳一個整數，來表示array中有多少元素小於第二個參數。*/

// function findSmallCount(arr, n){
//     let counter = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] < n){
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(findSmallCount([1, 1, 4, 5], 2));
// console.log(findSmallCount([1, 6, 1, 4, 5], 5));

///////////////////////////////////////////////////////////////
/* 7. 編寫一個名為findSmallerTotal的函式，其參數為一個整數的array以及另一個整數，
回傳值為array中小於第二個參數的所有元素的總和。*/

// function findSmallerTotal(arr, n){
//     let total = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] < n){
//             total += arr[i];
//         }
//     }
//     console.log(total);
//     return total;
// }

// findSmallerTotal([1, 2, 3], 3) // returns 3
// findSmallerTotal([1, 2, 3], 1) // returns 0
// findSmallerTotal([3, 2, 5, 8, 7], 999) // returns 25
// findSmallerTotal([3, 2, 5, 8, 7], 0) // returns 0

///////////////////////////////////////////////////////////////
// 8.編寫一個名為stars的函式，功能為按以下模式打印出星星層：
// function stars(n){
//     let star = "";
//     for (let i = 0; i < n; i++){
//         star = star + "*";
//         console.log(star);
//     }
// }
// stars(4);
// // *
// // **
// // ***
// // ****

///////////////////////////////////////////////////////////////
// 9.編寫一個名為stars2的函式，功能為按以下模式打印出星星層：
// function star2(n){
//     let star = "";
//     for (let i = 0; i < n; i++){
//         star += "*";
//         console.log(star);
//     }
//     for (n -= 1; n > 0; n--){
//         star = star.substring(1);
//         console.log(star);
//     }
// }
// star2(4);
// console.log("-----");


// //老師範例
// function star3(n){
//     for (let i = 1; i <= n; i++){
//         let star = "";
//         for (let j = 1; j <=i ; j++){
//             star += "*";
//             // console.log(star);
//         }
//         console.log(star);
//     }
//     for (let i = n-1; i >= 1; i--){
//         let star = "";
//         for (let j = 1; j <= i; j++){
//             star += "*";
//         }
//         console.log(star);
//     }
// }
// star3(4);

///////////////////////////////////////////////////////////////
/* 10. 在數學上，費波那契數是以遞迴的方法來定義：

首幾個費波那契數是：0、1、 1、 2、 3、 5、 8、 13、 21、 34、 55、 89、 144、 233、 377、 610、 987、…。
編寫一個名為fib的函式，唯一的參數是個整數n，回傳值為斐波那契數列的第n項。*/
// function fib(n) {
//     if (n == 0){
//         console.log(0)
//         return 0;
//     } else {
//         let arr = [0, 1];
//         while (arr.length <= n) {
//         let last = arr[arr.length-1];
//         let secondLast = arr[arr.length-2];
//         arr.push(last + secondLast);
//         }
//         console.log (arr[arr.length - 1]);
//         return arr[arr.length - 1];
//     }
// }
// fib(0); // returns 0
// console.log('------');
// fib(1); // returns 1
// console.log('------');
// fib(2); // returns 1
// console.log('------');
// fib(3); // returns 2
// console.log('------');
// fib(8); // returns 21


///////////////////////////////////////////////////////////////
// parent.02
///////////////////////////////////////////////////////////////
//02-1. 編寫一個名為reverse的函式，參數為一個String，回傳值為順序反轉的String。
// function reverse(str){
//     let newStr = "";
//     for (let i = str.length - 1; i >= 0; i--){
//         newStr += str[i];
//     }
//     return newStr;
// }
// console.log(reverse("abcd")); // returns "dcba"
// console.log(reverse("I am a good guy.")); 
// ; // returns ".yug doog a ma I"

///////////////////////////////////////////////////////////////
//02-02. 編寫一個名為swap的函式，參數為一個String，回傳值為大小寫反轉的String。
// function swap(str){
//     let newStr = "";
//     for (let i = 0; i < str.length; i++){
//         if (str[i] == str[i].toUpperCase()){
//             newStr += str[i].toLowerCase();
//         } else {
//             newStr += str[i].toUpperCase();
//         }
//     }
//     console.log(newStr);
//     return newStr;
// }

// swap("Aloha"); // returns "aLOHA"
// swap("Love you."); // returns "lOVE YOU."
// swap("Happy TO You."); // returns "lOVE YOU."

///////////////////////////////////////////////////////////////
//02-03. 編寫一個名為isPrime的函式，它接受一個整數作為參數，回傳值為一個boolean，告訴我們參數是否為一個質數。
// function isPrime(n){
//     if (n < 2){
//         return false;
//     }
//     for(let i = 2; i < n; i++){
//         // console.log(n % i);
//         if (n % i == 0){
//             return false
//         }
//     }
//     return true;    
// }
// console.log(isPrime(1)); // returns false
// console.log("---");
// console.log(isPrime(5)); // returns true
// console.log("---");
// console.log(isPrime(91)); // returns false
// console.log("---");
// console.log(isPrime(1000000)); // returns false

///////////////////////////////////////////////////////////////
/*02-04. 回文是指，正著讀或反著讀都一樣的句子。
例如:【上海自來水來自海上】是迴文。寫一個名為palindrome的函式，
它接受一個String作為參數，回傳值為一個boolean，告訴我們參數是否為回文。*/

// function palindrome(str){
//     let x = 0;
//      for (let i = str.length - 1; i >= 0; i--){
//         if (str[x] == str[i]){
//             x++;
//         }else {
//             return false;
//         }
//     }
//     return true;   
// }

// 老師範例
// function palindrome(str){
//     let i = 0;
//     let j = str.length - 1;

//     while(i < j){
//         if (str[i] != str[j]){
//             return false
//         }
//         i++;
//         j--;
//     }
//     return true;
// }
// console.log(palindrome("bearaeb")); // returns true
// console.log("---");
// console.log(palindrome("whatever revetahw")); // returns true
// console.log("---");
// console.log(palindrome("Aloha, how are you today?")); // returns false

///////////////////////////////////////////////////////////////7
//02-05. 編寫一個名為pyramid的函式，功能為按以下模式打印出星星層：
// function pyramid(n){
//     let star = "*";
//     if (n == 1){
//         console.log(star);
//     } else if (n > 1){
//         console.log(star);
//         for (let i = 1; i < n; i++){
//             star += "**";
//             console.log(star);
//         }
//     }
// }
// pyramid(0);

//<teacher>
// function printStar (space, star){
//     let result = "";
//     for (let i = 0; i < space; i++){
//         result += " ";
//     }
//     for (let i = 0; i < star; i++){
//         result += "*";
//     }
//     console.log(result);
// }
// function pyramid(k){
//     let star = 1;
//     let space = k - 1;
//     while (space >= 0){
//         printStar(space, star);
//         star += 2;
//         space -= 1;
//     }
// }
// pyramid(1);
// //*
// pyramid(2);
// //  *
// // ***
// pyramid(8);
// //    *
// //   ***
// //  *****
// // *******

///////////////////////////////////////////////////////////////
//02-06. 編寫一個名為inversePyramid的函式，功能為按以下模式打印出星星層：
// function inversePyramid(n){
//     let arr = ["*"];
//     let star = "*";
//     for (let i = 1; i < n; i++){
//         star += "**";
//         arr.push(star);
//     }    
//     for (let j = arr.length - 1; j >= 0; j--){
//         console.log(arr[j]);
//     }
// }
// inversePyramid(9);
////////////////////////////////////有空白
// function printStar(space, star){
//     let result = "";
//     for (let i = 0; i < space; i++){
//         result += " ";
//     }
//     for (let i = 0; i < star; i++){
//         result += "*";
//     }
//     console.log(result);
// }
// function inversePyramid(k){
//     let star = 2 * k - 1;
//     let space = 0;
//     while(star >= 1){
//         printStar(space, star);
//         space += 1;
//         star -= 2;
//     }
// }
// inversePyramid(8);

///////////////////////////////////////////////////////////////
/* 02-07. 質因數分解結
編寫一個名為factorPrime的函式，唯一的參數是個整數n，回傳值是一個String，表示n的質因數分解結果。*/
// 數列
// function factorPrime(n){
//     let str = "";
//     let arr = [];
//     while (n != 1){
//         for(let i = 2; i <= n; i++){
//             if (n % i == 0){
//                 n = n / i;
//                 arr.push(i);
//                 console.log(arr);
//                 break;
//         }
        
//         }
//     }
// }
// factorPrime(7);

//string
// function factorPrime(n){
//     let answer = n + " = "; //"120 = "
//     let p = 2; //質數最小值
//     while (p <= n){
//         if(n % p == 0){
//             n /= p; //n = n / p
//             answer += p + " x ";
//         } else {
//             p++;
//         }
//     }
//     // console.log(answer);
//     let result = "";
//     for (let i = 0; i <= answer.length - 4; i++){
//         result += answer[i];
//     }
//     console.log(result);
//     return result;
// }
// factorPrime(120);

///////////////////////////////////////////////////////////////
//初階題目 Park.03
///////////////////////////////////////////////////////////////
//03-01. 編寫一個名為mySort的函式，參數為一個array of numbers，回傳值為一個將元素由小到大排序的array。
/*array重要觀念
let arr = [1, 2, 3, 4, 5, 6, 7];
let x = arr[0]; //先把 A值 另存起來
arr[0] = arr[arr.length - 1]; //把 B值 塞進 A值，B 覆蓋掉 A，但原本的 B 也還在
arr[arr.length-1] = x; //把另存的 A 拿來覆蓋原本的 B
console.log(arr); //[7, 2, 3, 4, 5, 6, 1]
*/
// function mySort(arr){
//     let last = arr.length - 1; //排列由小到大，把大的留最後
//     while (last >= 0){
//         let biggest = arr[0]; //第一個
//         let biggestNumber  = 0; //第一個
//         for (let i = 0; i <= last;i++){ //在last往前的範圍內找最大的
//             if (arr[i] > biggest){
//                 biggest = arr[i]; //把較大值換掉原本的值，但不影響 array
//                 biggestNumber = i;  // 最大值的編號
//             }
//         }
//         let changeBox = arr[biggestNumber];
//         arr[biggestNumber] = arr[last];
//         arr[last] = changeBox;

//         last--; //把最大的換到最後後往前換第二大的
//     }
//     console.log(arr);
// }
// mySort([17, 0, -3, 2, 1, 0.5]); // returns [-3, 0, 0.5, 1, 2, 17]

///////////////////////////////////////////////////////////////
/*03-02. 落地問題: 一球從h米高度自由落下，每次落地後反跳回原高度的一半，再落下。求
小球在第n次落地時，總共經過多少公尺？編寫一個名為distance的函式，參數為h與n，回傳值為小球經過的總距離。*/
// function distance (h, n){
//     let result = h;
//     for (let i = 2; i <= n; i++){
//         result += 2 * (h / Math.pow(2, i-1)); //
//     }
//     return result;
// }
// console.log(distance(100, 4)); // 275
// console.log(distance(100, 1)); // 100
// console.log(distance(500, 7)); // 1484.375

///////////////////////////////////////////////////////////////
/* 03-03. 打印出所有的"水仙花數"。所謂"水仙花數"是指一個三位數，其各位數字立方和等於該數本身。
例如：153是一個"水仙花數"，因為$153=1^3+5^3+3^3$，或370也是水仙花數，因為$370=3^3+7^3+0^3$。*/
// function PPDI(){
//     for (let i = 100; i <= 999; i++){
//         let unit = i % 10;
//         let tens = Math.floor(i / 10) % 10; //把值除10後無條件捨去，再用除 10 的餘數得知個位數
//         let hunders = Math.floor(i / 100) % 10; //把值除100後無條件捨去，再用除 10 的餘數得知個位數

//         let sum = Math.pow(unit, 3) + Math.pow(tens, 3) + Math.pow(hunders, 3);
//         if (sum == i){
//             console.log(i);
//         }
//     }
// }
// PPDI();
///////////////////////////////////////////////////////////////
/*03-04. a是小於10的數字，相加的項數為n
若a  =2, n = 3，則輸出結果的形式如：2+22+222 = 246*/
// function calc(a, n){
//     let value = 0;
//     let sum = 0;
//     for (let i = 1; i <= n; i++){
//         value += a * Math.pow(10, i-1); //第 i 項的值 a + (a * 10的 i-1 次方)
//         sum += value;
//         // console.log(value);
//     }
//     console.log(sum);
//     return sum;
// }

//teacher
// function calc(a, n){
//     let sum = 0;
//     for (let i = 0; i < n; i++){
//         for (let j = 0; j <= i; j++){
//             sum += a * Math.pow(10, j);
//         }
//     }
//     console.log(sum);
//     return sum;
// }

// calc(2, 3); // 246
// calc(8, 5); // 98760
// calc(10, 6); // 1234560

///////////////////////////////////////////////////////////////
//03-05. 


///////////////////////////////////////////////////////////////
//中階題目 Park.04
///////////////////////////////////////////////////////////////
//04-01. 
///////////////////////////////////////////////////////////////
//04-02. 
///////////////////////////////////////////////////////////////
//04-03. 
///////////////////////////////////////////////////////////////
//04-04. 
///////////////////////////////////////////////////////////////
//04-05. 

///////////////////////////////////////////////////////////////
//費波那契數列 - 遞迴
function fsequence(n){
    if (n == 0){
        return 0;
    }
    if (n == 1){
        return 1;
    }
    return fsequence(n - 1) + fsequence(n - 2);
}
console.log(fsequence(10));