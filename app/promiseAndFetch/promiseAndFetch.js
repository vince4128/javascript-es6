export function promiseAndFetch(){

    //simple promise
    let promise = new Promise((resolve, reject) => {
        resolve();
    });

    promise
        .then(() => console.log('finally resolved !'))
        .then(() => console.log('i was also ran !'))
        .catch(() => console.log('got rejected !'));

    //Async code with promises
    let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    });

    promise2
        .then(() => console.log('2 - finally resolved !'))
        .then(() => console.log('2 - i was also ran !'))
        .catch(() => console.log('2 - got rejected !'));    

    // Ajax request with fetch
    let url = "https://jsonplaceholder.typicode.com/posts/";
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data));

}