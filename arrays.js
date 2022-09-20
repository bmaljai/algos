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
function oddOrEven(array) {
    let remainder = array.reduce((accumulator, current) => accumulator + current, 0) % 2
    return remainder ? 'odd' : 'even'
}

var isSquare = function (n) {
    return n ** (1 / 2) === Math.floor(n ** (1 / 2))
}

function reverseList(list) {
    return list.reverse()
}
// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages) {
    return ages.sort(function (a, b) { return a - b; }).slice(-2);
}

function findShort(s) {
    let min = s.split(' ')[0].length
    let indexmin = 0
    s.split(' ').forEach((item, index, array) => {

        if (item.length < min) {
            min = item.length
            indexmin = index
        }
    })
    return min
}

function duplicateCount(text) {
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

site: dice.com | site: indeed.com | site: angel.co | site: lever.co | site: greenhouse.io | site: jobs.ashbyhq.com | site: app.dover.io(engineer | developer)("javascript" AND "remote") - senior - staff - sr. - lead - principal - angular after: 2022 - 08 - 01