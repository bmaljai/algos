function getCount(str) {
    let vowels = {
        'a': true,
        'e': true,
        'i': true,
        'o': true,
        'u': true
    }
    let vowelsCount = 0;
    str.split('').forEach(item => {
        if (vowels[item]) {
            vowelsCount++;
        }
    })

    https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript


    function isPangram(string) {
        let checker = {
            'a': 1, 'b': 1, 'c': 1, 'd': 1, 'e': 1, 'f': 1, 'g': 1, 'h': 1,
            'i': 1, 'j': 1, 'k': 1, 'l': 1, 'm': 1, 'n': 1, 'o': 1, 'p': 1,
            'q': 1, 'r': 1, 's': 1, 't': 1, 'u': 1, 'v': 1, 'w': 1, 'x': 1, 'y': 1, 'z': 1
        }
        string.split('').forEach(letter => {
            delete checker[letter.toLowerCase()]
        })
        return Object.keys(checker).length === 0
    }

    https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

    function isPangram(string) {
        string = string.toLowerCase();
        return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
            return string.indexOf(x) !== -1;
        });
    }


    function XO(str) {
        let counter = { 'x': 0, "o": 0 };
        str.split('').forEach(item => {
            counter[item.toLowerCase()] += 1;
        })
        return counter['x'] == counter['o']
    }




    function getSum(a, b) {
        //make sure to zero the accumulator to avoid NaN return, because it will otherwise be undefined
        let accumulator = 0;
        if (a < b) {
            for (let i = a; i <= b; i++) {
                //if accumulator is not set to 0 explicitly, the accumulator will be += undefined which will return NaN
                accumulator += Number(i);
            }
        } else if (a > b) {
            for (let i = b; i <= a; i++) {
                accumulator += Number(i);
            }
        } else {
            accumulator = a;
        }
        return accumulator;
    }
    //https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

    function digital_root(n) {
        if (n < 10) { return n };
        for (var i = 0, n = String(n), a = 0; i < n.length; i++) {
            a += +n[i];
        }
        return digital_root(a);
    }

    function valueOfX(eq) {
        let [left, right] = eq.split(' = ');
        if (right.includes('x')) [left, right] = [right, left];
        return (eval(right) - eval(left.replace('x', 0))) * (left.includes('- x') ? -1 : 1);
    }


    function findChildren(dancingBrigade) {
        let sorted = [];
        for (let i = 65; i <= 90; i++) {
            if (dancingBrigade.includes(String.fromCharCode(i))) {
                sorted.push(String.fromCharCode(i));
                for (let j = 0; j < dancingBrigade.length; j++) {
                    if (dancingBrigade[j] === String.fromCharCode(i + 32)) {
                        sorted.push(dancingBrigade[j]);
                    }
                }
            }
        }
        return sorted.join('');
    }

    function moveZeros(arr) {
        return arr.sort((a, b) => {
            if (a === 0 && a === b) { return 0 }
            if (a === 0) { return 1 }
            if (b === 0) { return -1 }
        })
    }

    var moveZeros = function (arr) {
        return arr.filter(function (x) { return x !== 0 }).concat(arr.filter(function (x) { return x === 0; }));
    }