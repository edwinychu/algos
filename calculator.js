const calculator = (expression) => {
  let postfix = convertPostfix(expression);
  return evaluate(postfix);
}

const convertPostfix = (expression) => {
  let operators = [];
  let postfix = [];
  let index = 0;
  while (index < expression.length) {
    if (expression[index] === " " || expression[index] === "\t") {
      index++;
      continue;
    }

    //add operand to either operators stack or postfix stack
    if (isDigit(expression[index])) {
      postfix.push(convertToDouble(expression[index]));
    } else {
      //pop off operators from operators stack if they have priority over current operator
      while (operators.length > 0 && hasPriority(operators[operators.length - 1], expression[index])) {
        postfix.push(operators.pop());
      }
      operators.push((expression[index]));
    }
    index++;
  }

  while (operators.length > 0) {
    postfix.push(operators.pop());
  }

  return postfix;
}

const convertToDouble = char => {
  return parseFloat(char);
};

const isDigit = char => {
  if (char >= "0" && char <= "9") {
    return true;
  }
  return false;
};

const hasPriority = (operator1, operator2) => {
  if (operator1 === '*' || operator1 === '/') {
    return true;
  }
  if (operator1 === '+' || operator1 === '-') {
    if (operator2 === '+' || operator2 === '-' ) {
      return true;
    }
  }
  return false;
}

const evaluate = (postfix) => {
  let operands = [];

  for (let i=0; i<postfix.length; i++) {
    if (isDigit(postfix[i])) {
      operands.push(postfix[i]);
    } else {
      let operand2 = operands.pop();
      let operand1 = operands.pop();
      if (postfix[i] === '*') {
        operands.push(operand2 * operand1);
      } else if (postfix[i] === '+') {
        operands.push(operand2 + operand1);
      } else if (postfix[i] === '/') {
        operands.push(operand1/operand2);
      } else if (postfix[i] === '-') {
        operands.push(operand1 - operand2);
      }
    }
  }
  console.log(postfix)
  return operands[operands.length - 1];
}

const expression = "3+6*5−1/2.5";

console.log(calculator(expression));
