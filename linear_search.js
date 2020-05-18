
const item = 'Mango'
const array = ['Oranges','Mango', 'Wheat' , 'Apples', 'Bananas' , 'Bread' , 'Oranges']
var linearSearch = function linearSearch (array , item) {
    for(let i = 0; i< array.length; i++) {
        if(array[i] ===item ){
            return i
        }

    }

    return null;
}

console.log('index', linearSearch(array, item))


// Global linear search

// var globalSearch = function globalSearch (arr , item) {
//     let result = []
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === item) {
//             result.push(i)
//             continue;
//         }
//     }
//     return result;
// }

// console.log('global search', globalSearch(array, item))