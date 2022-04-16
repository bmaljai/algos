//https://www.codewars.com/kata/582746fa14b3892727000c4f/train/javascript
function countDevelopers(list) {
  let euroCounter = 0;
  list.forEach(item=>item.continent==='Europe'&&item.language==='JavaScript'?euroCounter++:0);
  return euroCounter;
}

function countDevelopers(list) {
  return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
}