//https://www.codewars.com/kata/53f0f358b9cb376eca001079/train/javascript
var Ball = function(ballType) {
this.ballType = ballType || 'regular';
};

//https://www.codewars.com/kata/56b29582461215098d00000f
function pipeFix(numbers) {
    let arr = [];
    let first = numbers[0];
    let last = numbers[numbers.length - 1];

    for (let i = first; i <= last; i++) {
        arr.push(i);
    }
    return arr;
}

let pipeFix = nums => Array.from({length:nums.pop() - nums[0]+1},(v,i)=>i+nums[0]);
//https://www.codewars.com/kata/55e8aba23d399a59500000ce/solutions/javascript
class Hero {
    constructor(name = 'Hero') {
        this.name = name;
        this.position = '00';
        this.health = 100;
        this.damage = 5;
        this.experience = 0;
    }
}
