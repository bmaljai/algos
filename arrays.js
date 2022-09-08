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