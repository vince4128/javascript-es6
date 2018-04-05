export function arrowFunc(){

    const add = (a,b) => {
        return a + b;
    }

    const add2 = (a,b) => a + b;

    console.log(add2(1,2));

    const double = number => 2*number;

    console.log(double(4));

    const numbers = [1,2,3];

    console.log(numbers.map(number=>2*number));

    //'this' issue
    const team = {
        members: ['Jane', 'Bill'],
        teamName: 'Super Squad',
        teamSummary: function(){
            return this.members.map((member)=>{
                return `${member} is on team ${this.teamName}`;
            })
        }
    }

    console.log(team.teamSummary());

}