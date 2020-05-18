var number = 98436932

function splits(n) {
    var arr_string = ('' + n).split('');
    var arr_numbers = arr_string.map(Number)
    for (let i = 0; i<arr_numbers.length; i++) {
        if(arr_numbers[i]<=5 ) {
            arr_numbers[i] = 0
        } else {
            arr_numbers[i] = 1
        }
    }
  
    return arr_numbers.join('')
}

console.log('number', splits(number))

