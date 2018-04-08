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

}