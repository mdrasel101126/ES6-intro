const numbers = [3, 5, 1, 9, 0, 3];
/* const result = Math.max(...numbers);
console.log(...numbers);
console.log(result); */

const numbers2 = numbers;
console.log(numbers2);
numbers2.push(45);
console.log(numbers);
const numbers3 = [...numbers];
console.log(numbers3);
numbers3.push(60);
console.log(numbers);
console.log(numbers3);
