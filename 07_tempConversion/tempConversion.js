const ftoc = function (fTemp) {
  let cTemp = ((fTemp - 32) * (5 / 9)).toFixed(1);
  return +cTemp;
};

const ctof = function (cTemp) {
  let fTemp = (cTemp * (9 / 5) + 32).toFixed(1);
  return +fTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
