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
  } else if ('*/+'.includes(input[0]) || opStr.includes(input[input.length - 1])) {
    return 'Syntax Error';
  } else {
    for (let i = 1; i < input.length - 1; i++) {
      if ((opStr.includes(input[i-1]) && opStr.includes(input[i]) && opStr.includes(input[i+1])) 
      || (opStr.includes(input[i-1]) && '*/+'.includes(input[i]))) {
        return 'Syntax Error'
      }
    }
  }

  // run Calculation function and return the result
  return Calculation(input)
}

// export default Calculator
module.exports = Calculator
