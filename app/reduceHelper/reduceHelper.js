export function reduceHelper(){

    const numbers = [10,20,30];
    var sum = 0;

    const reducedNumbers = numbers.reduce((sum,number)=>{
        return sum + number;
    }, 0);

    console.log(reducedNumbers);

    //

    const primaryColors = [
        { color : 'red' },
        { color : 'yellow' },
        { color : 'blue' }
    ];

    primaryColors.reduce((previous, primaryColor)=>{
        previous.push(primaryColor.color);
        return previous;
    }, []);

    //section 7 session 22

    function balancedParens(string) {
        return !string.split("").reduce(function(previous, char){
            if(previous < 0){return previous}
            if(char === "("){return ++previous;}
            if(char === ")"){return --previous;}
            return previous;
        },0);
    }

    console.log(balancedParens("(((("));
    console.log(balancedParens("(((())))"));

    //

    const desks = [
        { type: 'sitting' },
        { type: 'standing' },
        { type: 'sitting' },
        { type: 'sitting' },
        { type: 'standing' }
    ];
      
    const deskTypes = desks.reduce((previous, desk)=>{
          if(desk.type === 'sitting'){++previous.sitting;}
          if(desk.type === 'standing'){++previous.standing;}
          return previous;
    }, { sitting: 0, standing: 0 });

    console.log(deskTypes);

    //remove duplicate values
    const numbers2 = [1,1,2,3,4,4];

    function unique(array){        
        return array.reduce((previous,item)=>{

            let isADouble = previous.find((prev)=>{
                return prev === item
            });

            if(!isADouble){
                previous.push(item);
            }

           return previous; 
        },[])
    };

    const removeDouble = unique(numbers2);
    console.log(removeDouble);

}