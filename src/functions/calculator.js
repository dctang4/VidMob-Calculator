// import Calculation component

// import Calculation from "./calculation";
const Calculation = require('./calculation.js')

const Calculator = (str) => {

  // remove all the whitespace
  let input = str.replace(/\s/g, '')

  const opStr = '*/+-';

  // check for invalid inputs and syntax errors
  if (input.search(/[^\d()*/+-.]/g) >= 0) {
    return 'Invalid Input';
  } else if ('*/+)'.includes(input[0]) || '*/+-('.includes(input[input.length - 1])) {
    return 'Syntax Error';
  } else {
    for (let i = 1; i < input.length - 1; i++) {
      if ((opStr.includes(input[i-1]) && opStr.includes(input[i]) && opStr.includes(input[i+1])) 
      || (opStr.includes(input[i-1]) && '*/+'.includes(input[i]))) {
        return 'Syntax Error'
      }
    }
  }

  let regExp = new RegExp("(\\D+\\.\\d+)")
  // regExp.lastIndex = 0; // resetting reExp starting position as precaution

  while (regExp.test(input)) {
    let strArr = RegExp.$1.split('.').join('0.')
    input = input.replace(regExp, strArr)
  }

  // run Calculation function
  let result = Calculation(input)
  // If result is not an integer round the round the float to 2 decimal places
  return !Number.isInteger(result) ? result.toFixed(2) : result 
}

// export default Calculator
module.exports = Calculator
