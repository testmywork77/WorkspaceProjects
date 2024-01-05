function sum(num1, num2){
    return num1 + num2;
}
console.log(typeof sum)

function myFunction(a,b){
    return arguments.length;
}

let argsLength =myFunction(2,4);
console.log(`Args length: ${argsLength}`);
