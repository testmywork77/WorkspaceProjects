// #6 - Difference between map(), filter() and reduce() in Javascript
// 1. map:
let numbers = [1,2,3];
let doubleNumbers = numbers.map((e) => e * 2);
console.log(numbers);
console.log(doubleNumbers);

let fatTemp = [32, 68, 86, 104, 212];

function fahToCel(fah){
    return (fah - 32) * (5/9);
}

let celTemp = fatTemp.map(fahToCel);
console.log(fatTemp);
console.log(celTemp);

// 2. filter:
let numArray = [1,2,3,4,5,6,7,8,9,10];
let evenNumArray = numArray.filter((n) => n % 2 === 0)
let oddNumArray = numArray.filter((n) => n % 2 != 0)
console.log(numArray);
console.log(evenNumArray);
console.log(oddNumArray);

let employee = [
    {name:"John", age:30, gender:"male"},
    {name:"Bob", age:35, gender:"male"},
    {name:"Lisa", age:40, gender:"female"},
    {name:"Priya", age:25, gender:"female"},
    {name:"Peter", age:55, gender:"male"}
]

let maleEmployee = employee.filter((e) => e.gender === "male")
let femaleEmpOver30 = employee.filter((e) => e.gender === "female" && e.age > 20)
console.log(employee);
console.log(maleEmployee);
console.log(femaleEmpOver30);

// 2. reduce:
let intArray = [2,4,1,5,3];
let sum = intArray.reduce((acc, num) => acc+num, 0)
console.log(intArray);
console.log(sum);

//max number in the array
let max = intArray.reduce((max, num) => {
    if(num > max){
        return num;
    } else{
        return max;
    }
 }, intArray[0]);
console.log(max);

// Cart: name, price
let cartItems = [
    {name:"Item1", price: 500},
    {name:"Item2", price: 600},
    {name:"Item3", price: 800},
    {name:"Item4", price: 1000},
    {name:"Item5", price: 100}
]

let totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0)
console.log(cartItems);
console.log(totalPrice);



