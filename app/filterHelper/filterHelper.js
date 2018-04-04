export function filterHelper(){

    //selecting needed data with filter
    const products = [
        {name:'concombre', type:'légume'},
        {name:'banane', type:'fruit'},
        {name:'céleri', type:'légume'},
        {name:'orange', type:'fruit'}
    ];
    
    //filter to get only the object with a type of fruit
    var fruits = products.filter((product)=>{
        return product.type === 'fruit';
    });

    console.log(fruits);

};