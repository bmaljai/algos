//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
function squareDigits(num){
    return Number(String(num).split('').map(item=>String((+item)**2)).join(''))
  }

function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000
}