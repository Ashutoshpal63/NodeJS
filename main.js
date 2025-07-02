// main.js
import { greet } from './greetings.js';
import { add, subtract, multiply, divide } from './mathOperations.js';

const name = 'Ashutosh';

console.log(greet(name));

console.log('Addition:', add(10, 5));
console.log('Subtraction:', subtract(10, 5));
console.log('Multiplication:', multiply(10, 5));
console.log('Division:', divide(10, 5));
