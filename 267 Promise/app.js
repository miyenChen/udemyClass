// //promise base API
// const name = document.querySelector('#name');
// const delay = document.querySelector('#delay');
// const button = document.querySelector('#set-Alarm');
// const output = document.querySelector('#output');

// function alarm(person, delay) {
//     return new Promise((resolve, reject) => {
//         if (delay < 0) {
//             reject('不能小於0');
//         } else {
//             setTimeout(() => {
//                 resolve(person + '起床');
//             }, delay);
//         }
//     });
// }
// // button.addEventListener('click', () => {
// //     let promiseObject = alarm(name.value, delay.value);
// //     promiseObject
// //         .then((message) => {
// //             output.innerHTML = message;
// //         })
// //         .catch((e) => {
// //             output.innerHTML = e;
// //         });
// // });
// button.addEventListener('click', async () => {
//     try {
//         let result = await alarm(name.value, delay.value);
//         output.innerHTML = result;
//     } catch (e) {
//         output.innerHTML = e;
//     }
// });

const newJoke = document.querySelector('#newJoke');
const jokeText = document.querySelector('#jokeText');
async function hello() {
    try {
        let resulf = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
        //得到所有資料
        let data = await resulf.json();
        // 只顯示其中 key = joke 的內容
        // console.log(data.joke);
        jokeText.innerHTML = data.joke; //新的會取代掉舊的
        // jokeText.innerHTML += data.joke + '\n';//新增的會疊加
    } catch (e) {
        console.log(e);
    }
}
newJoke.addEventListener('click', () => {
    hello();
});
