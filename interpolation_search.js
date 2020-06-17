function interpolationSearch (arr , x) {
    let low = 0;
    let hi = (arr.length-1);

    while(low < hi) {
        if(low === hi) {
            if (arr[low] == x) return `The index of the ${x} in the array is ${low}`;

            return 'Element is not in the array'
        }

        let pos = low + (((hi - low) / (arr[hi] - arr[low])) * (x-arr[low]));

        if(arr[pos]  == x) {
            return `The index of the ${x} in the array is ${pos}`;
        }

        if(arr[pos] < x) {
            low = pos + 1;
        } else {
            hi = pos - 1;
        }
    } 

    return "Element isn't in the array"
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(interpolationSearch(array , 7));