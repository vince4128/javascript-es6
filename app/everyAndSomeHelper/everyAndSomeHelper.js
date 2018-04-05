export function everyAndSomeHelper(){

    const computers = [
        { proc:'r72700x', ram:32 },
        { proc:'i78700K', ram:24 },
        { proc:'r52400g', ram:8}
    ];

    const allComputersCanRunProgram = computers.every((computer)=>{
        return computer.ram > 16;
    });

    const someComputersCanRunProgram = computers.some((computer)=>{
        return computer.ram > 16;
    });

    console.log(allComputersCanRunProgram);
    console.log(someComputersCanRunProgram);

    //use case

    function Field(value){
        this.value = value;
    }

    Field.prototype.validate = function(){
        return this.value.length > 0;
    }

    const username = new Field("2cool");
    const password = new Field("my_password");
    const birthdate = new Field("10/10/2010");

    const fields = [username, password, birthdate];

    const formIsValid = fields.every((field)=>{
        return field.validate();
    })

    //console.log("username.validate ", username.validate());
    console.log(formIsValid);

    //

    const requests = [
        { url: '/photos', status: 'complete' },
        { url: '/albums', status: 'pending' },
        { url: '/users', status: 'failed' }
    ];
      
    const inProgress = requests.some((request)=>{
        return request.status === 'pending';
    });

    console.log(inProgress);

}