/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let parentheses = [];
    let leftParens = n;
    let rightParens = n;
    const recurse = (parens, left, right) => {
        if (left === 0 && right === 0) {
            parentheses.push(parens);
        }
        if (left > 0) recurse(parens.concat('('), left - 1, right);
        if (right > left) recurse(parens.concat(')'), left, right - 1);
    }    
    recurse('', leftParens, rightParens);
    return parentheses;
};
