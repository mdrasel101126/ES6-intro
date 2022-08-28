const square = (numbers) => {
  let sum = 0;
  for (const number of numbers) {
    sum = sum + number * number;
  }
  return sum / numbers.length;
};

const numbers = [1, 2, 3, 4, 5, 6];
console.log(square(numbers));
