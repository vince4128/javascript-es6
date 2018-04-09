export function generators(){

    // for ... of loops

    const colors = ['red', 'green', 'blue'];

    for(let color of colors){
        console.log(color);
    }

    /*const numbers = [1,2,3,4];

    let total = 0;
    for (let number of numbers){
        total += number;
    }*/

    // generators

    // function that can be entered and exit many times
    // we run some code return a value and we go right back into the function at the same place that we left it.

    function* numbers() {//* -> generator
        yield;
    }

    const gen = numbers();
    console.log(gen.next());//{value:undefined, done:false}
    console.log(gen.next());//{value:undefined, done:true}

    

}