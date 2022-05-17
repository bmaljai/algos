//https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f/train/javascript
//my solution
function aliasGen(a,b){
    // Code Here
 if ( a && b ){
   let fla = a[0];
   let flb = b[0];
   if (fla.match(/\d/)||flb.match(/\d/)){
     return 'Your name must start with a letter from A - Z.';
   }
   else{
     return `${firstName[fla.toUpperCase()]} ${surname[flb.toUpperCase()]}`
   }
 }
  else{
    return 'Your name must start with a letter from A - Z.';
  }
}
//others' variations
const initialCap = (str) => str[0].toUpperCase();
const isValidName = (name) => /^[a-z]/i.test(name);
const aliasGen = (fName, lName) => {
  return (isValidName(fName) && isValidName(lName))
    ? `${ firstName[initialCap(fName)] } ${ surname[initialCap(lName)] }`
    : 'Your name must start with a letter from A - Z.';
}

function aliasGen(a, b) {
    return /^[a-z]/i.test(a) && /^[a-z]/i.test(b) ? `${firstName[a[0].toUpperCase()]} ${surname[b[0].toUpperCase()]}` : "Your name must start with a letter from A - Z.";  
  }


