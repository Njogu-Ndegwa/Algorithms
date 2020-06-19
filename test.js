var no1 = 10
var no2 = 493193

function digital_root(n) {
    let arr= (''+n).split('').map(Number)
     var sum  = arr.reduce((a, b) => a+b, 0);
     return sum>= 10 ? digital_root(sum) : sum
}

console.log(digital_root(no2))


