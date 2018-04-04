export function findHelper(){

    const users = [
        { name: 'Jill' },
        { name: 'Alex' },//*
        { name: 'Bill' },
        { name: 'Alex '}
    ];

    //Querying a record with find
    var user = users.find((user)=>{
        return user.name === 'Alex';//*return only the first one
    });

    console.log(user);

    //find continued
    function Car(model){
        this.model = model;
    }

    const cars = [
        new Car('DS'),
        new Car('SM'),
        new Car('CX')
    ];

    const theCar = cars.find((car)=>{
        return car.model === 'DS';
    })

    console.log(theCar);

}
