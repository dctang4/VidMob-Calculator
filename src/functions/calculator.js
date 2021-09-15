import Calculate from "./calculate"

const Calculator = (str) => {
  let output = null;

  // remove all the whitespace
  let input = str.replace(/\s/g, '')

  // order of operation
  const ooo = [ [ '*', '/' ], [ '+', '-' ] ];

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

  // for (let i = 0; i < input.length; i++) {
  //   if (input[i] === "(") {
  //     let count1 = 1;
  //     let count2 = 0;
  //     for (let j = i+1; j < input.length; j++) {
  //       if (input[j] === "(") {
  //         count1++
  //       } else if (input[j] === ")") {
  //         count2++
          
  //       }
  //     }
  //   }
  // }

  for (let i = 0; i < ooo.length; i++) {

    // Regular Expression to look for operators between floating numbers or integers
    let regExp = new RegExp('(\\-?\\d+\\.?\\d*)([\\' + ooo[i].join('\\') + '])(\\-?\\d+\\.?\\d*)')
    regExp.lastIndex = 0 // resetting reExp starting position as precaution

    while (regExp.test(input)) {
      output = Calculate(RegExp.$1, RegExp.$2, RegExp.$3);
      if (isNaN(output) || !isFinite(output)) {
        return "Error NaN or Not Finite"
      }

      input = input.replace(regExp, output)
    }
  }

  return output
}

export default Calculator