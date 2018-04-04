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
}
