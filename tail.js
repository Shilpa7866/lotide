//const assertEqual = function()
//const tail = function(array);
//const result = tail(["Hello", "Lighthouse", "Labs"]);
//assertEqual(result, ["Lighthouse", "Labs"]);

const assertEqual = require('./assertEqual');

const tail = function(array) {
  let arrayReturn = [];
  if (array.length <= 1) {
    return arrayReturn;
  } else {
    arrayReturn = array.slice(1);
  } return arrayReturn;
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result, ["Lighthouse", "Labs"]));

module.exports = tail;
