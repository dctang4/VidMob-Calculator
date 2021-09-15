// import Calculator component
const Calculator = require('./src/functions/calculator')
// import Calculator from './src/functions/calculator.js';

// Import Readline Node Library and Create Interface to Read Input
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask questions, receive input, run callback in response
readline.question('Enter an equation: ', input => {
  console.log(`Result: ${Calculator(input)}`);
  readline.close();
});