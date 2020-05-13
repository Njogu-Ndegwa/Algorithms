let selectionSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}

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


console.log( 'selection sort', selectionSort(arr))