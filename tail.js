
const assertEqual = require('./assertEqual');

const tail = function(arr1) {
  let arr2 = [];
  for(let i = 1; i < arr1.length; i++)
    arr2.push(arr1[i]);
  return arr2;
}

//console.log(assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello"));
//console.log(assertEqual(tail([5,6,7]), 5));

//console.log((tail(["Hello", "Lighthouse", "Labs"]), "Hello"));
//console.log((tail([5,6,7]), 5));

module.exports = tail;
