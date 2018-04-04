export function mapHelper(){

    const numbers = [1,2,3];
    var doubleNumbers = numbers.map(function(number){
        return number * 2;
    });

    console.log(doubleNumbers);

}