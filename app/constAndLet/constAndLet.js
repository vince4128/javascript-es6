export function constAndLet(){

    const name = 'Jane';//constant (not expected to change)
    let title = 'Software Engineer';// expected to change
    let hourlyWage = 40;
    //some time later...
    title = 'Senior Software Engineer';
    hourlyWage = 45;

}