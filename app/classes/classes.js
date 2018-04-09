export function classes(){

    // classes in es6 is a syntaxic sugar, behind the hood it's still prototype inheritance

    // es5 prototype inheritance

    /*function Car(options){
        this.title = options.title;
    }

    Car.prototype.drive = function(){
        return 'vroom';
    }

    function Toyota(options){
        Car.call(this, options);
        this.color = options.color;
    }

    // inheritance
    Toyota.prototype = Object.create(Car.prototype);
    Toyota.prototype.constructor = Toyota;

    Toyota.prototype.honk = function(){
        return 'beep';
    }

    const toyota = new Toyota({color: 'red', title:'Daily driver'});

    console.log(toyota, toyota.drive(), toyota.honk());*/

    // refactoring using es6 classes syntax
    
    class Car {

        constructor({ title }){
            this.title = title;
        }

        drive(){
            return 'vrooom';
        }

    }

    const car = new Car({ title:'Toyota'});

    console.log(car, car.drive());

}