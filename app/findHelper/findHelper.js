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

    //
    const posts = [
        { id:1, title:'New Post' },
        { id:2, title:'Old Post'}
    ];

    const comment = { postId:1, content:'Great Post' };

    function postForComment(){
        return posts.find((post)=>{
            return post.id === comment.postId;
        });
    }

    const postToShow = postForComment(posts, comment);

    console.log(postToShow);

    //
    const ladders = [
        {id:1, height:20},
        {id:3, height:25}
    ];

    function findWhere(array, criteria) {
        const value = Object.values(criteria);
        const param = Object.keys(criteria);
        return array.find((item)=>{
            return item[param] === value[0];
        })
    }

    const foundedLadder = findWhere(ladders, {height:25});

    console.log(foundedLadder);

}
