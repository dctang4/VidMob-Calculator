import Operations from "./operations";
// const Operations = require('"./operations"')

const Calculation = (input) => {
  let output = null;

  // order of operation
  const ooo = [ ["*", "/"], ["+", "-"]];

  for (let i = 0; i < ooo.length; i++) {
    // Regular Expression to look for operators between floating numbers or integers
    let regExp = new RegExp(
      "(\\-?\\d+\\.?\\d*)([\\" + ooo[i].join("\\") + "])(\\-?\\d+\\.?\\d*)"
    );
    regExp.lastIndex = 0; // resetting reExp starting position as precaution

    while (regExp.test(input)) {
      output = Operations(RegExp.$1, RegExp.$2, RegExp.$3);
      if (isNaN(output) || !isFinite(output)) {
        return "Error NaN or Not Finite";
      }

      input = input.replace(regExp, output);
    }
  }

  return output;
};

export default Calculation;
// module.exports = Calculation;
