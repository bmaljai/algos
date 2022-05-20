//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
function squareDigits(num){
    return Number(String(num).split('').map(item=>String((+item)**2)).join(''))
  }

function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000
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