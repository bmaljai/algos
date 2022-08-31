function towerBuilder(nFloors) {
    var tower = [];
    for (var i = 0; i < nFloors; i++) {
        tower.push(" ".repeat(nFloors - i - 1)
            + "*".repeat((i * 2) + 1)
            + " ".repeat(nFloors - i - 1));
    }
    return tower;
}

function isIsogram(str) {
    str = str.toLowerCase()

    for (var i = 0; i < str.length; i++) {
        if (str.indexOf(str.charAt(i), i + 1) >= 0) {
            return false
        }
    }

    return true
}

function getMiddle(s) {
    let count = s.length;
    let index = count / 2;
    let flag = count % 2;
    let slice;
    if (flag) {
        slice = s.slice(index, index + 1)
    } else {
        slice = s.slice(index - 1, index + 1)
    }
    return slice
}

function getMiddle(s) {
    return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}


function accum(s) {
    // your code
    let newstringarray = []
    s.split('').forEach((item, index) => {
        let insertstring = ''
        insertstring += item.toUpperCase()
        for (let i = 0; i < index; i++) {
            insertstring += item.toLowerCase()
        }
        newstringarray.push(insertstring)
    })
    return newstringarray.join('-')
}

function DNAStrand(dna) {
    //your code here
    let legend = {
        "A": "T",
        "T": "A",
        "G": "C",
        "C": "G"
    }
    let str = ''
    dna.split('').forEach(item => {
        str += legend[item]
    })
    return str
}

function doubleChar(str) {
    // Your code here
    return str.split('').map(item => item + item).join('')
}

function spinWords(string) {
    //TODO Have fun :)
    return string.split(' ').map(item => {
        if (item.length >= 5) {
            return item.split('').reverse().join('')
        } else {
            return item
        }
    }).join(' ')
}