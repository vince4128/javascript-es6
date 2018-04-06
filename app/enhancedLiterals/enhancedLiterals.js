export function enhancedLiterals(){

    //first example
    function createBookShop(inventory){
        return {
            inventory,// = inventory:iventory
            inventoryValue(){//inventoryValue = function(){}
                return this.inventory.reduce((total, book) => total+book.price, 0);
            },
            priceForTitle(title){
                return this.inventory.find(book => book.title === title).price;
            }
        };
    }

    const inventory = [
        {title: 'Harry Potter', price:10},
        {title: 'Eloquent Javascript', price:15}
    ];

    const bookShop = createBookShop(inventory);

    console.log(bookShop.inventoryValue(), bookShop.priceForTitle('Harry Potter'));

    //second example
    /*function saveFile(url, data){
        $.ajax({ method: 'POST', url, data});
    }

    const url = "http://fileupload.com";
    const data = { color: 'red' };
    
    saveFile(url, data);
    */

}