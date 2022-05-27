//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
function squareDigits(num){
    return Number(String(num).split('').map(item=>String((+item)**2)).join(''))
  }

function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000
}

function openOrSenior(data) {
  //if age >= 55 AND handicap > 7
  let newarr = []
  data.forEach((item) => {
    if (item[0] >= 55 && item[1] > 7) {
      newarr.push("Senior");
    } else {
      newarr.push("Open");
    }
  })
  return newarr;
}
function duplicateEncode(word){
  word = word.toLowerCase();
  let obj = {};
  for(let i =0;i<word.length;i++){
    if(word[i] in obj){
       obj["" + word[i]]=")";
    }else{
      obj[String(word[i])]="(";
    }
  }
  let newstr = "";
  for(let j=0;j<word.length;j++){
    newstr += obj[word[j]]
  }
return newstr;
  
}

console.log('a'.charCodeAt());
console.log(String.fromCharCode(65));
function cypherShift(number){
  return (number+13)%26
}
console.log(cypherShift(20));
let oldchar = 'y';
let newchar = oldchar.charCodeAt();
console.log(newchar-96)

//65 and 96



function highAndLow(numbers){
  let arr = numbers.split(" ").map(item => +item);
  return `${Math.max(...arr)} ${Math.min(...arr)}`
}



function order(words){
  let wordsArr = words.split(' ');
  let wordsArrLength = wordsArr.length;
  let orderedArr = new Array();
  
  for(let i=0;i<wordsArrLength;i++){
    for(let j=0;j<wordsArr[i].length;j++){

      if(typeof Number(wordsArr[i][j]) === 'number'){
        orderedArr[wordsArr[i][j]-1] = wordsArr[i];
      }
    }
  }
   
  return orderedArr.join(' ');
}
