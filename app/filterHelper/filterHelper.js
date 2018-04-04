export function filterHelper(){

    //selecting needed data with filter
    const products = [
        {name:'concombre', type:'légume', quantity:0, price:1},
        {name:'banane', type:'fruit', quantity:10, price:15},
        {name:'céleri', type:'légume', quantity:30, price:9},
        {name:'orange', type:'fruit', quantity:3, price:5}
    ];
    
    //filter to get only the object with a type of fruit
    var fruits = products.filter((product)=>{
        return product.type === 'fruit';
    });

    console.log(fruits);

    // Type is 'vegetable', quantity is greater than 0, price is less than 10
    var cheapVegeAvailable = products.filter((product)=>{
        return product.type === 'fruit' && product.quantity>0 && product.price<10;
    });

    console.log(cheapVegeAvailable);

};