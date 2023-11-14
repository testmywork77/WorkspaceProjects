function abc(){
    c = 30;
    console.log( c);
    const a= 10;
    let b = 20;
    var c; // c Hoisted, But not value
}

abc();