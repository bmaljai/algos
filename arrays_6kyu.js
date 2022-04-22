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