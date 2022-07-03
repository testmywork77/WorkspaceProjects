// 1. Function Declaration
/*
//add();

function add(){
    // code
    console.log(2+3);
}

add();
*/

//2. Named Function
/*
addition();

let addition = function(){
    console.log(4+5);
}

addition();
*/

// 3. Function Expression/Name Function with parameters
/*
let add = function(num1, num2){
    console.log(num1 + num2)
}

add(3,4);
*/

// 4. Arrow Function
/*
let add = (num1, num2) => {
    console.log(num1 + num2)
}

add(4, 6);
*/

// Function Overloading not possible
function add(num1, num2){
    console.log(num1 + num2)
}

function add(num1, num2, num3){
    console.log(num1 + num2 + num3)
}

add(2, 4)


