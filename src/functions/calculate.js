const Calculate = (a, op, b) => {
  // convert string to number
  a = +a;
  b = +b;

  // switch statement for the 4 different operations +, -, *, /
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "Operator Error"
  }
}

export default Calculate