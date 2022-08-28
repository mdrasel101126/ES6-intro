const findMax = (arr1, arr2) => {
  const newArr = [...arr1, ...arr2];
  return Math.max(...newArr);
};

const arr1 = [5, 3, 2, 7];
const arr2 = [10, 4, 1];
console.log(findMax(arr1, arr2));
