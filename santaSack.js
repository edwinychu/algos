const knapsack = (items, capacity) => {
  let max = 0;
  var results = [];
  let maxCombo = [];
  let recurse = (index, value, weight, array) => {
  
    if (index === items.length) {
      if (value > max && weight <= capacity) {
        max = value;
        maxCombo = array;
      }
      return;
    }
    if (weight > capacity) {
      return;
    }
    if (value > max) {
      max = value;
      maxCombo = array;
    }

    recurse(index+1, value + items[index].value, weight + items[index].weight, array.concat(items[index]));
    recurse(index+1, value, weight, array);

  }
  recurse(0, 0, 0, []);
  return maxCombo;
}

const item0 = { weight: 9, value: 8 };
const item1 = { weight: 7, value: 160};
const item2 = { weight: 3, value: 90 };
const item3 = { weight: 2, value: 15 };
const item4 = { weight: 8, value: 20 };

console.log(knapsack([item0, item1, item2, item3, item4], 20));