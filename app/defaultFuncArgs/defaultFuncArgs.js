export function defaultFuncArgs(){

    function makeAjaxRequest(url, method = 'GET'){
        return method;
        //Logic to make a request
    }

    makeAjaxRequest('google.com');
    //makeAjaxRequest('google.com', undefined);
    makeAjaxRequest('google.com', null);
    makeAjaxRequest('google.com', 'POST');

    //use case
    
    function User(id){
        this.id = id;
    }

    function generateId(){
        return Math.random()*999999;
    }

    function createAdminUser(user = new User(generateId())){
        user.admin = true;
        
        return user;
    }

    createAdminUser();

    console.log(createAdminUser());

    const user = new User(generateId());

}