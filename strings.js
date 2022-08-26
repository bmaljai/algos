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