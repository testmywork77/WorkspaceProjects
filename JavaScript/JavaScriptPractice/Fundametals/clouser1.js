function outer(x){
    function inner(y){
        return x+y;
    }
    return inner;
}

const outerReturn = outer(10);
console.log(outerReturn);
console.log(outerReturn(2));