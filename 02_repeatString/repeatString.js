const repeatString = function (string, repeats) {
  let finalString = "";
  for (let i = 0; i < repeats; i++) finalString = finalString + string;
  return finalString;
};

// Do not edit below this line
module.exports = repeatString;
