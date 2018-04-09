export function destructuring(){

    //destructuring object

    var expense = {
        type: 'Business',
        amount: '$45 USD'
    };

    const { type, amount } = expense;

    console.log(type, amount);

    //destructuring arguments

    const savedFiled = {
        extension: 'jpg',
        name: 'repost',
        size: 14040
    };

    function fileSummary({ name, extension, size}){
        console.log(`The file ${name}.${extension} is of size ${size}`);
        return `The file ${name}.${extension} is of size ${size}`
    }

    fileSummary(savedFiled);

    //destructuring arrays

    const companies = [
        'Google',
        'Facebook',
        'Uber',
        'Aviato'
    ];

    const [ name, name2 ] = companies; //name is equal to the first item of the array, name 2 is equal to the second array etc...
    console.log(name, name2);

    //we can use the rest operator to access the rest of the item
    const [ comp1, comp2, ...rest] = companies;
    console.log(comp1, comp2, rest);

    //destructuring arrays and object
    const otherCompanies = [
        { name: 'Google', location: 'Mountain View'},
        { name: 'Facebook', location:'Me,lo Park'},
        { name: 'Uber', location:'San Francisco'}
    ];

    const [{ location }] = otherCompanies;
    console.log(location);

    //

    const Google = {
        locations: ['Mountain View', 'New York', 'London']
    };

    //destructuring the first item in the locations property of Google object
    //const { locations: [location] } = Google;
    //console.log(locations);

    //get the array
    // const { locations : locations } = Google;
    //console.log(locations)

    //when to use destructuring ?

    // we use a very long chain of arguments
    // function signUp(username, password, email, dateOfBirth, city)
    // maybe we ca use an object and destructure it
    function signUp({city, password, email, username, dateOfBirth}){
        // create new user
    }

    // other code
    // other code

    // without using object
    // signUp('myname', 'mypassword','myemail@example.com', '1/1/1990', 'New York');

    // using object
    const user = {
        username: 'myname' ,
        password: 'mypassword',
        email: 'myemail@example.com',
        dateOfBirth: '1/1/1990',
        city: 'New York'
    }

    signUp(user);

    // an api give us coordinate in arrays in array
    // but we want a array of object in the form [{ x:4, y:5 }, {}]

    const points = [
        [4,5],
        [10,1],
        [0,40]
    ];

    //destructuration in the arguments of the anonymous arrow function
    const structureChanged = points.map(([x, y]) => {
        return {x: x, y: y};
    });

    console.log(structureChanged);

    //array destructuring exercise without using array helper
    const numbers = [1, 2, 3];

    // use recursivity
    function double([ num, ...rest ]){
        if (rest.length > 0) return [num * 2, ...double(rest)];
        return [num * 2];
    }

    console.log('exercise');
    console.log(double(numbers));
    //double(numbers);

}