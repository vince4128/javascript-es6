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

}
