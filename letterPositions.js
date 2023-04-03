const letterPositions = function(sentence) {
  const results = {};
    for (i = 0; i < sentence.length; i++) {
	    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
      
  }
     return results;
};

console.log(letterPositions("hello"));
console.log(letterPositions("lighthouse in the house"));
