// const fetchPromise1 = fetch(
//     'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json',
// );
// const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
// const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

// Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
//     .then((responses) => {
//         responses.forEach((response) => {
//             //response.status可以知道404 200 OK等狀態
//             console.log(response.url, response.status);
//         });
//     })
//     .catch((e) => {
//         console.log(e);
//     });

// async function testFn() {
//     return 100;
// }
// let result = testFn();
// // console.log(result); // promise object
// result.then((data) => console.log(data)); //100

// async function fetchUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// // }

// fetchUsers();

//await會同步處哩，因此返回response object
async function awaitTest() {
    const x = await fetch('https://example.com');
    console.log(x);
}
awaitTest();
//Response {type: 'cors', url: 'https://example.com'....
