export function foreachHelper(){

    //create an array
    const colors = ['red','green','blue'];
    //loop over the array
    colors.forEach(function(color){
        console.log(color);
    });

    //create an array
    const numbers = [1,2,3,4,5];
    //create a variable to hold the sum
    var sum = 0;

    function adder(number){
        sum += number;
    }

    //Loop over the array, incrementing the sum variable
    numbers.forEach(adder);
    //print the sum variable
    console.log(sum);

}