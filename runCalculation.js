const Calculator = require('./src/functions/calculator')

// Import Readline Node Library and Create Interface to Read Input
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// import Calculator from './src/functions/calculator.js';

// Ask questions, receive input, run callback in response
readline.question('Enter an equation: ', input => {

  // const Calculator = (str) => {

  //   // remove all the whitespace
  //   let input = str.replace(/\s/g, '')
  
  //   const opStr = '*/+-';
  
  //   // check for invalid inputs and syntax errors
  //   if (input.search(/[^\d()*/+-.]/g) >= 0) {
  //     return 'Invalid Input';
  //   } else if ('*/+'.includes(input[0]) || opStr.includes(input[input.length - 1])) {
  //     return 'Syntax Error';
  //   } else {
  //     for (let i = 1; i < input.length - 1; i++) {
  //       if ((opStr.includes(input[i-1]) && opStr.includes(input[i]) && opStr.includes(input[i+1])) 
  //       || (opStr.includes(input[i-1]) && '*/+'.includes(input[i]))) {
  //         return 'Syntax Error'
  //       }
  //     }
  //   }
  
  //   const Operations = (a, op, b) => {
  //     // convert string to number using Unary Operator (+)
  //     a = +a;
  //     b = +b;
    
  //     // switch statement for the 4 different operations +, -, *, /
  //     switch (op) {
  //       case "+":
  //         return a + b;
  //       case "-":
  //         return a - b;
  //       case "*":
  //         return a * b;
  //       case "/":
  //         return a / b;
  //       default:
  //         return "Operator Error"
  //     }
  //   }
  
  //   const Calculation = (input) => {
  //     let output = null;
    
  //     // order of operation
  //     const ooo = [ ["*", "/"], ["+", "-"]];
    
  //     for (let i = 0; i < ooo.length; i++) {
  //       // Regular Expression to look for operators between floating numbers or integers
  //       let regExp = new RegExp(
  //         "(\\-?\\d+\\.?\\d*)([\\" + ooo[i].join("\\") + "])(\\-?\\d+\\.?\\d*)"
  //       );
  //       regExp.lastIndex = 0; // resetting reExp starting position as precaution
    
  //       while (regExp.test(input)) {
  //         output = Operations(RegExp.$1, RegExp.$2, RegExp.$3);
  //         if (isNaN(output) || !isFinite(output)) {
  //           return "Error NaN or Not Finite";
  //         }
    
  //         input = input.replace(regExp, output);
  //       }
  //     }
    
  //     return output;
  //   };
  
  
  //   return Calculation(input)
  // }


  console.log(`Result:  ${Calculator(input)}`);
  readline.close();
});