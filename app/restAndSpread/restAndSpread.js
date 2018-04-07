export function restAndSpread(){

    function addNumbers(...numbers){
        return numbers.reduce((sum, number) => {
            return sum + number;
        }, 0);
    }

    const a = addNumbers(1,2,3,4,5,6,7);
    console.log(a);

    //

    const defaultcolors = ['red', 'green'];
    const userFavoriteColors = ['orange', 'yellow'];
    const fallColors = ['fire red', 'fall orange'];

    const concatArray = [ 'blue', ...fallColors, ...defaultcolors, ...userFavoriteColors ];
    console.log(concatArray);

    //

    function validateShoppingList(...items){
        if(items.indexOf('milk') < 0){
            return ['milk', ...items];
        }

        return items;
    }

    const v = validateShoppingList('oranges', 'bread', 'eggs');
    console.log(v);

    //

    const MathLibrary = {

        //previous method
        calculateProduct(...rest){
            console.log('Please use the multiply method instead');
            return this.multiply(...rest);
        },

        //newly created method with shorter name
        multiply(a, b){
            return a*b;
        }

    }

}

