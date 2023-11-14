// For Loop
const numbers = [2, 4, 6, 8, 10];

console.log("Output- For Loop");
for(let i=0; i<numbers.length; i++){
    console.log(numbers[i] * 2);
};

// While Loop
let i = 0;
console.log("Output- While Loop");
while(i < numbers.length){    
    console.log(numbers[i] * 2);
    i++;
}

let j = 0;
console.log("Output - Do While Loop");
do {
    console.log(numbers[j] * 2);
    j++;
} while(j < numbers.length)

