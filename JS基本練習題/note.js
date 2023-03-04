// arr1 = ['鼠', '牛'];
// arr2 = ['貓', ...arr1, '狗'];
// arr3 = [...arr2];

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log([...arr1, ...arr2]);

function sum (x, y, z){
    console.log(x + y + z)
}
let arr = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];

sum(...arr);
sum(...arr2);