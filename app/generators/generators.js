export function generators(){

    // for ... of loops

    /*const colors = ['red', 'green', 'blue'];

    for(let color of colors){
        console.log(color);
    }*/

    /*const numbers = [1,2,3,4];

    let total = 0;
    for (let number of numbers){
        total += number;
    }*/

    // generators

    // function that can be entered and exit many times
    // we run some code return a value and we go right back into the function at the same place that we left it.

    function* shopping() {//* -> generator
        // stuff on the sidewalk

        // walking down th sidewalk

        // go into the store with cash
        const stuffFromStore = yield 'cash';
        //walking to laundry place
        const cleanClothes = yield 'laundry';

        //walking back home
        return [stuffFromStore, cleanClothes];
        
    }

    // stuff int the store
    const gen = shopping();
    console.log(gen.next());// leaving the house {value:'cash', done:false}
    // walked into the store
    // walking up and down the aislese...
    // on the next line 'groceries' is the parameter for yield, it repplace yield 'cash' with yield 'groceries'
    console.log(gen.next('groceries'));// leaving the store with groceries {value:'groceries', done:true}
    console.log(gen.next('clean clothes'));

    // other example

    function* colors() {
        yield 'red';
        yield 'blue';
        yield 'green';
    }

    /*const gen2 = colors();
    console.log(gen2.next()); // {value: "red", done: false}
    console.log(gen2.next()); // {value: "blue", done: false}
    console.log(gen2.next()); // {value: "green", done: false}
    console.log(gen2.next()); // {value: undefined, done: true} done:true because there is no more yield statement*/

    //generator works well with for of loop
    const myColors = [];

    for (let color of colors()){
        myColors.push(color);
    }
    console.log(myColors);

    // practical use of generator (with delegation)

    const testingTeam = {
        lead: 'Amanda',
        tester: 'Bill',
        [Symbol.iterator]: function* (){ // key interpelation - dynamically generated key we can wrap with curly braces like - teach a for loop how it should iterate over this object
            yield this.lead;
            yield this.tester;
        }
    };

    const engineeringTeam = {
        testingTeam,
        size:3,
        department: 'Engineering',
        lead: 'Jill',
        manager: 'Alex',
        engineer: 'Dave',
        [Symbol.iterator]: function* (){
            yield this.lead;
            yield this.manager;
            yield this.engineer;
            yield* this.testingTeam;
        }
    };

    function* TeamIterator(team){// iterator function
        yield team.lead;
        yield team.manager;
        yield team.engineer;
        yield* team.testingTeam;// yield* stand for 'hey i'm currently in a generator, but i've got another generator that has a few yield statements that you might care about as well'
    }

    const names = [];
    for (let name of engineeringTeam){
        names.push(name);
    }

    console.log(names);

    //generator with recursion
    class Comment {
        constructor(content, children){
            this.content = content;
            this.children = children;
        }
    }

    const children = [
        new Comment('good comment', []),
        new Comment('bad comment', []),
        new Comment('meh', [])
    ];

    const tree = new Comment('Great post !', children);

}