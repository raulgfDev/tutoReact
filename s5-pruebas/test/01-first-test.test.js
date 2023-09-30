

/*

test('This is a name/description about the test 1', () => {

    if ( 0 != '0') {
        throw new Error('different types');
    }
});

test('This is a name/description about the test 2', () => {

    if ( 0 !== '0') {
        throw new Error('different types');
    }
});

*/

// It isn't necessary the 'if'
test('This is a name/description about the test 3', () => {

    const origin = 'Hello rgfDev';
    const comparison = 'Hello rgfDev';

    expect( origin ).toBe( comparison );
});