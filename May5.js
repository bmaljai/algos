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
