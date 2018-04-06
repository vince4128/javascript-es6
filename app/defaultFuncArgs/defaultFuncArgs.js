export function defaultFuncArgs(){

    function makeAjaxRequest(url, method = 'GET'){
        return method;
        //Logic to make a request
    }

    makeAjaxRequest('google.com');
    //makeAjaxRequest('google.com', null);
    makeAjaxRequest('google.com', null);
    makeAjaxRequest('google.com', 'POST');

    //use case
    

}