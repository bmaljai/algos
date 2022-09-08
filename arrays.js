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