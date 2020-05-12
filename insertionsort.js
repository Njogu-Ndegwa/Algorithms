function insertionsort (array){
    for (let i = 1; i< array.length; i++) {
        let j = i-1;
        let temp = array[i];

        while(j>=0 && array[j]> temp) {
            array[j+1] = array[j]
            j--
        }  
        array[j+1] = temp
    }

    return array
}

// A function returning a random integer

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

var arr = [];
//  Initialize a random integer unsorted array
for(var i = 0; i<10; i++) {
    arr.push(getRandomInt(1, 100));
}

console.log('unsorted array:')
console.log(arr);

let array = [5, 12, 7, 14, 15, 4, 16, 3, 22]

console.log( 'insertion sort', insertionsort(arr))