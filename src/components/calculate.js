import React from "react";

const Calculate = (str) => {
  let output = null;
  // let input = str.replace(/[\d()*/+-.]/g, '');
  let input = str.replace(/\s/g, '')

  const operators = {
    add: '+',
    sub: '-',
    mul: '*',
    div: '/'
  };

  const order = [
    [
      operators.mul,
      operators.div
    ],
    [
      operators.add,
      operators.sub
    ]
  ];

  const opStr = '*/+-';

  // check for invalid inputs and syntax errors
  if (input.search(/[^\d()*/+-.]/g) >= 0) {
    return 'Invalid Input';
  } else if ('*/+'.includes(input[0]) || opStr.includes(input[input.length - 1])) {
    return 'Syntax Error';
  } else {
    for (let i = 1; i < input.length - 1; i++) {
      if ((opStr.includes(input[i-1]) && opStr.includes(input[i]) && opStr.includes(input[i+1])) 
      || (opStr.includes(inputs[i-1]) && '*/+'.includes(input[i]))) {
        return 'Syntax Error'
      }
    }
  }



  return output
}

export default Calculate