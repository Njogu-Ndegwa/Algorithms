const item = 15;
const array = [2 , 10, 6, 7, 8, 4, 6, 7, 12, 15 ]
const sorted_array = array.sort(function (a, b){return a-b});

var binarySearch = function binarySearch (arr , item) {
        let startIndex = 0
        let endIndex = arr.length - 1;

        while (startIndex <= endIndex) {
            let middleIndex = Math.floor((startIndex + endIndex)/2 )
            if(item === arr[middleIndex]){
                return `The index of the selected item is ${middleIndex}`
            };

            if(item > arr[middleIndex]) {
                startIndex = middleIndex + 1 
            }

            if(item < arr[middleIndex]) {
                endIndex = middleIndex -1
            }

        }
        return null
}

console.log("Algorithm", binarySearch(sorted_array, item))
