// Named imports
// import { message, number, sum, sub } from './calc.js';

// console.log("*** Named imports ***");
// console.log(`message: ${message}`); // hello world
// console.log(`number: ${number}`); // 10
// console.log(sum(4, 8)); // 12
// console.log(sub(8, 4)); // 4

// Named imports using Alias
// import { message as msg, number as num, sum as add, sub as minus} from './calc.js'

// console.log("*** Named imports using Alias ***")
// console.log(`message: ${msg}`); // hello world
// console.log(`number: ${num}`); // 10
// console.log(add(4, 8)); // 12
// console.log(minus(8, 4)); // 4

// Named imports using Namespace
import * as calc from "./calc.js";

console.log("*** Named imports using Namespace ***");
console.log(`message: ${calc.message}`); // hello world
console.log(`number: ${calc.number}`); // 10
console.log(calc.sum(4, 8)); // 12
console.log(calc.sub(8, 4)); // 4

// Default imports
import greeting from "./greet.js";

console.log("*** Default imports ***");
console.log(greeting());
