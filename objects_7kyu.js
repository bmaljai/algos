//https://www.codewars.com/kata/582746fa14b3892727000c4f/train/javascript
function countDevelopers(list) {
  let euroCounter = 0;
  list.forEach(item=>item.continent==='Europe'&&item.language==='JavaScript'?euroCounter++:0);
  return euroCounter;
}

function countDevelopers(list) {
  return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
}


//https://www.codewars.com/kata/597c684822bc9388f600010f/train/javascript
class Dinglemouse{

  constructor( firstName, lastName ){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  getFullName(){
    return `${this.firstName} ${this.lastName}`.trim();
  }
  
}

//https://www.codewars.com/kata/58279e13c983ca4a2a00002a/solutions/solutions
function greetDevelopers(list) {
  list.forEach(function(developer) {
    developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;
  });
  
  return list;
}

const greetDevelopers = list => list.map(
  dev => ({...dev, greeting: `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`})
);



//https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript
function highestRank(arr){
  let arrObj = {};
//Your Code logic should written here
  arr.forEach(item=>{
    
    if(item in arrObj){
      arrObj[item] += 1;
    }else{
      arrObj[item] = 1;
    }
  })
  let currentMax = 0;
  let maxKey = 0;
  Object.entries(arrObj).forEach((item,index)=>{
    if (item[1] > currentMax){
      currentMax = item[1];
      maxKey = item[0];
    }else if (item[1] === currentMax){
      if(item[0] > maxKey){
        maxKey = item[0];
      }
    }
  })
  return Number(maxKey);
}


//https://www.codewars.com/kata/5d2659626c7aec0022cb8006/train/javascript
function* baumSweet() {
  yield 1;
}


function disemvowel(str) {
  let vowels = 'aeiou';
  return str.split('').filter(item=>!(vowels.includes(item.toLowerCase()))).join('');
}

//https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript


function pigIt(str){
  let exclude = '!?';
  return str.split(' ').map(item=>{
    if(exclude.includes(item)){return item}
    return `${item.slice(1)}${item[0]}ay`
  }).join(' ');
}