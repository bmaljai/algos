function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }

  function createPhoneNumber(numbers){
    numbers = numbers.join('');
    return '(' + numbers.substring(0, 3) + ') ' 
        + numbers.substring(3, 6) 
        + '-' 
        + numbers.substring(6);
  }

  function createPhoneNumber(numbers){
    return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
  }

  function createPhoneNumber(numbers){
    return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
 }

 function createPhoneNumber(numbers){
    return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
  }





  function createPhoneNumber(numbers){
    var format = "(ooo) ooo-oooo";
    numbers.forEach(item=>{
      format = format.replace(
        'o', item
      );
    });
    return format;
  }



  //https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
  function arrayDiff(a, b) {
    return a.filter( item => !(b.includes(item)) );
  }

  const isLanguageDiverse = list => {
    list = [list.filter(a=>a.language==='Python').length,list.filter(a=>a.language==='Ruby').length,list.filter(a=>a.language==='JavaScript').length]
    return Math.max.apply(null,list)/Math.min.apply(null,list) <= 2
  }


  //https://www.codewars.com/kata/514b92a657cdc65150000006/solutions/javascript
  function solution(number){
    var n3 = Math.floor(--number/3), n5 = Math.floor(number/5), n15 = Math.floor(number/15);
    return (3 * n3 * (n3 + 1) + 5 * n5 * (n5 + 1) - 15 * n15 * (n15+1)) /2;
  }

  function solution(number){
    var sum = 0;
    
    for(var i = 1;i< number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
  }

  //mine
  function solution(number){
    if(number<0){return 0}
    let numarr = [];
    for(let i=1;i<number;i++){
      if (i%15===0){numarr.push(i)}
      else{
      if (i%3===0){numarr.push(i)}
      if (i%5===0){numarr.push(i)}
      }
  
    }
    return numarr.reduce((acc,curr)=>acc+=curr,0);
  }
//https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
  function likes(names) {
    if(names.length < 1){
      return "no one likes this"
    }
    if(names.length === 1){
      return `${names.shift()} likes this`
    }
    if(names.length === 2){
      return `${names.shift()} and ${names.shift()} like this`
    }
    if(names.length === 3){
      return `${names.shift()}, ${names.shift()} and ${names.shift()} like this`
    }
    if(names.length > 3){
      return `${names.shift()}, ${names.shift()} and ${names.length} others like this`
    }
  }

  function likes (names) {
    var templates = [
      'no one likes this',
      '{name} likes this',
      '{name} and {name} like this',
      '{name}, {name} and {name} like this',
      '{name}, {name} and {n} others like this'
    ];
    var idx = Math.min(names.length, 4);
    
    return templates[idx].replace(/{name}|{n}/g, function (val) {
      return val === '{name}' ? names.shift() : names.length;
    });
  }

//https://www.codewars.com/kata/54da5a58ea159efa38000836/solutions
  const findOdd = (xs) => xs.reduce((a, b) => a ^ b);