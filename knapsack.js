const knapsack = (items, capacity) => {
  let result;
  let max = 0;
  const recurse = (index, value, weight, array) => {
    if (index === items.length) {
      if (weight <= capacity && value > max) {
        result = array;
        max = value;
      }
      return;
    }
    if (weight > capacity) {
      return;
    }
    if (value > max) {
      result = array;
      max = value;
    }
    //one path including item in knapsack
    recurse(index+1, value + items[index].value, weight + items[index].weight, array.concat(items[index]));
    //another path without item in knapsack
    recurse(index+1, value, weight, array);
  }

  recurse(0, 0, 0, []);
  return result;
};

const item0 = { weight: 9, value: 8 };
const item1 = { weight: 7, value: 160 };
const item2 = { weight: 3, value: 90 };
const item3 = { weight: 2, value: 15 };
const item4 = { weight: 8, value: 20 };

console.log(knapsack([item0, item1, item2, item3, item4], 20));