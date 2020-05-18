
const item = 'Mango'
const array = ['Oranges','Mango', 'Wheat' , 'Apples', 'Bananas' , 'Bread']
var linearSearch = function linearSearch (array , item) {
    for(let i = 0; i< array.length; i++) {
        if(array[i] ===item ){
            return i
        }

    }

    return null;
}

console.log('index', linearSearch(array, item))