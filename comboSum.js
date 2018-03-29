/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let output = [];
    const recurse = (sum, combos, index) => {
        if (sum < 0) {
            return;
        }
        if (sum === 0) {
            output.push(combos);
        }
        for (let i=index; i<candidates.length; i++) {
            recurse(sum - candidates[i], combos.concat(candidates[i]), i);
        }
    }
    recurse(target, [], 0);
    return output;
};
