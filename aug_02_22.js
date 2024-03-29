//Implement a function which multiplies two numbers.
const multiply = function(n1,n2){
    return n1*n2;
}

const multiply = (a,b)=>a*b;


//https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
function isValidWalk(walk) {
    //insert brilliant code here
    let legend = {
        n: 0,
        s: 0,
        e: 0,
        w: 0
    }
    walk.forEach(item => {
        legend[item] += 1
    })
    if (walk.length != 10) { return false };
    if (legend.n - legend.s != 0) { return false };
    if (legend.e - legend.w != 0) { return false };
    return true
}

function isValidWalk(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length

    for (var i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n': dy--; break
            case 's': dy++; break
            case 'w': dx--; break
            case 'e': dx++; break
        }
    }

    return dt === 10 && dx === 0 && dy === 0
}

function isValidWalk(walk) {
    function count(val) {
        return walk.filter(function (a) { return a == val; }).length;
    }
    return walk.length == 10 && count('n') == count('s') && count('w') == count('e');
}

//https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript
function friend(friends) {
    //your code here
    let result = friends.filter(name => name.length === 4)
    return result
}

//growth over year
//https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript
function nbYear(p0, percent, aug, p) {
    if (p < p0) { return 0 };

    let percentFormat = percent * 0.01;
    let currentpop = p0 + (percentFormat * p0) + aug;
    let n = 1;
    if (currentpop > p) { return n };

    while (currentpop < p) {
        currentpop = currentpop + (percentFormat * currentpop) + aug;
        n = n + 1;

    }
    return n;
}

function nbYear(p0, percent, aug, p) {

    for (var years = 0; p0 < p; years++) {
        p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years
}
