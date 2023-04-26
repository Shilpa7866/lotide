const findKey = function (obj, callback) {
  var key = undefined;
  for (var val in obj) {
    if (callback(obj[val])) {
      key = val;
      break;
    }
  }
  return key;
};

module.exports = findKey;