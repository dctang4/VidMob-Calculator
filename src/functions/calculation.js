// import Operations component

// import Operations from "./operations";
const Operations = require("./operations.js");

const Calculation = (input) => {
  let output = null;

  // order of operation
  const ooo = [
    ["*", "/"],
    ["+", "-"],
  ];

  const loop = (input) => {
    if (input.includes("(") && input.includes(")") && (input.indexOf("(") < input.indexOf(")")) ){

      let re = new RegExp("(\\(\\-?\\d+\\.?\\d*)([\\*\\/\\+\\-])(\\-?\\d+\\.?\\d*\\))")

      re.lastIndex = 0; // resetting reExp starting position as precaution

      let part = re.exec(input)[0].replace(/[\\(\\)]/g, '')

      let newPart = loop(part)

      input = input.replace(re, newPart)

      return loop(input)

    } else {
      for (let i = 0; i < ooo.length; i++) {
        // Regular Expression to look for operators between floating numbers or integers
        let regExp = new RegExp(
          "(\\-?\\d+\\.?\\d*)([\\" + ooo[i].join("\\") + "])(\\-?\\d+\\.?\\d*)"
        );
        regExp.lastIndex = 0; // resetting reExp starting position as precaution

        // loop over the input while there is still calculation for current level of operations of order
        while (regExp.test(input)) {
          output = Operations(RegExp.$1, RegExp.$2, RegExp.$3);
          if (isNaN(output) || !isFinite(output)) {
            return "Error NaN or Not Finite";
          }

          // replace the calculated part of the input with the result
          input = input.replace(regExp, output);
        }
      }
      return output;
    }
  };

  return loop(input);
};

// export default Calculation;
module.exports = Calculation;
