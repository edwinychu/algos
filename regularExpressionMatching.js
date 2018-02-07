const regularExpressionMatching = (string, expression) => {
  
  const recurse = (stringIndex, expressionIndex) => {
    //if both string index and expression index get to the end, then we know expression matches
    if (stringIndex === string.length && expressionIndex === expression.length) {
      return true;
    }

    if (expressionIndex < expression.length - 1 && expression[expressionIndex + 1] === '*') {
      //if the index after current index in expression is a '*', iterate through string 
      for (let i=stringIndex; i<string.length + 1; i++) {
        //keep recursing into next values in string and starting with expressionIndex + 2 b/c expressionIndex + 1 is a *
        if (recurse(i, expressionIndex + 2)) {
          return true;
        }
        //return false because out of bounds
        if (i >= text.length) {
          return false;
        }
        
        //second case is to see if the expression and string don't match at current index; exception is if expression index is a '.' because that can be matched with anything
        if (string[i] !== expression[expressionIndex] && expression[expressionIndex] !== '.'){
          return false;
        }
      }
    } else if (stringIndex < string.length && expressionIndex < expression.length && (expression[expressionIndex] === '.' || expression[expressionIndex] === string[stringIndex])) {
      return recurse(stringIndex + 1, expressionIndex + 1);
    }
    return false;

  }

  return recurse(0,0);

}

const text = 'fabbbc';
const expression = '.ab*c';
const f = regularExpressionMatching(text, expression);
console.log(f);