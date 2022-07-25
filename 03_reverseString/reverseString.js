const reverseString = function (string) {
  // create reversedString variable
  let reversedString = "";

  // loop the string's length
  for (let i = 0; i < string.length; i++) {
    // grab the substr of current index and add it to reversedString
    reversedString = reversedString + string.substr(-i - 1, 1);
  }

  // return final result
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
