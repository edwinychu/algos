var evalRPN = function(tokens) {
    let operands = [];
    for (let i=0; i<tokens.length; i++) {
        if (isInt(tokens[i])) {
            operands.push(parseInt(tokens[i]));
        } else {
            let operand2 = operands.pop();
            let operand1 = operands.pop();
            if (tokens[i] === '+') {
                operands.push(parseInt(operand2 + operand1));
            } else if (tokens[i] === '*') {
                operands.push(parseInt(operand2 * operand1));
            } else if (tokens[i] === '-') {
                operands.push(parseInt(operand1 - operand2));
            } else if (tokens[i] === '/') {
                operands.push(parseInt(operand1/operand2));
            }
        }
    }
    return parseInt(operands.pop());
};

const isInt = (char) => {
    if (Number.isInteger(parseInt(char))) {
        return true;
    }
    return false;
}

console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);