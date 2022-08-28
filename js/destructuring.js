/* let a = 5;
let b = 6;
[a, b] = [b, a]; */
//console.log(a, b);

const fish = {
  name: "Hilish",
  color: "Rupali",
  phone: 1234452,
  price: 3000,
  address: "Padma",
};
const { name, color, phone, address, city } = fish;
console.log(name, color, phone, address, city);
const numbers = [45, 56, 32, 21];
const [a, b, c] = numbers;
console.log(a, b, c);
numbers.unshift(1);
console.log(numbers);
