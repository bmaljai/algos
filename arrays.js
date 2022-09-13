const binaryArrayToNumber = arr => {
    // your code
    let rev = arr.reverse()
    let total = 0
    rev.forEach((item, index) => {
        let place = 2 ** index
        total += place * item
    })
    return total
};

function getAverage(marks) {
    //TODO : calculate the downward rounded average of the marks array
    return Math.floor(marks.reduce((acc, current) =>
        acc + current, 0) / marks.length)

}

const items = [
    { price: 100},
    { price: 200},
    { price: 300},
    { price: 400},
    { price: 500},
    { price: 600}
]
items.filter((item)=>{
    return item.price<=100
})

function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2).sort((a, b) => (a - b))));
}

function printArray(array) {
    //show me the code!
    return array.join(',')
}
websites.push('codewars')// add the value "codewars" to the already defined websites array

function arrayMadness(a, b) {
    // Ready, get set, GO!!!
    let suma = a.reduce((a, b) => a + b ** 2, 0)
    let sumb = b.reduce((a, b) => a + b ** 3, 0)
    return suma > sumb
}

function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

function oddOrEven(arr) {
    return arr.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even';
}