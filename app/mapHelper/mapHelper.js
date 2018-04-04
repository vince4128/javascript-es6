export function mapHelper(){

    const numbers = [1,2,3];
    //new var, avoid mutating numbers array
    var doubleNumbers = numbers.map((number) => {
        return number * 2;
    });

    console.log(doubleNumbers);

    //Plucking values
    const cars = [
        { model: '2cv', price: 'CHEAP'},
        { model : 'sm', price: 'expensive'}
    ];

    const prices = cars.map((car)=>{
        return car.price;
    });

    console.log(prices);

    //method to pluck values
    function pluck(array, property) {
        return array.map((item)=>{
            return item[property];    
        })
    }
    
    var paints = [{color:'red'}, {color:'blue'}, {color:'yellow'}];
    var colors = pluck(paints,'color');
    console.log(colors);

}