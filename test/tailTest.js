const assertEqual = require('../assertEqual');
const tail = require('../tail');

console.log(assertEqual(tail(["Hello", "Lighthouse", "Labs"])));

module.exports = tail;