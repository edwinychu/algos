const knapsack = (items, capacity) => {
  let result;
  let max = 0;
  let count = 0;
  const recurse = (index, value, weight, array) => {
    // if (index === items.length) {
    //   if (weight <= capacity && value > max) {
    //     result = array;
    //     max = value;
    //   }
    //   return;
    // }
    if (weight > capacity) {
      return;
    }
    if (value > max) {
      result = array;
      max = value;
    }

    for (let i=index; i<items.length; i++) {
      recurse(i+1, value, weight, array);
      recurse(i+1, value + items[index].value, weight + items[index].weight, array.concat(items[index]));
    }
  }

  recurse(0, 0, 0, []);
  return result;
};

const item0 = { weight: 20, value: 100 };
const item1 = { weight: 5, value: 6 };
const item2 = { weight: 1, value: 7 };
const item3 = { weight: 20, value: 4000 };
const item4 = { weight: 20, value: 3000 };

console.log(knapsack([item0, item1, item2, item3, item4], 20));