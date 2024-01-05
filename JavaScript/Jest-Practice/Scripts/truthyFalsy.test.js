test('truty/false checking', () => {
    const name = null;    
    expect(name).toBeFalsy();

    const name1 = "";
    expect(name1).toBeFalsy();

    expect(false).toBeFalsy();

    const name2 = "text";
    expect(name2).toBeTruthy();

    expect(true) .toBeTruthy();
})