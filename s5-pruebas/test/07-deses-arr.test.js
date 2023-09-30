import {retornaArreglo} from "../src/base-pruebas/07-deses-arr.js";


describe('test 07-deses-arr file', () => {

    test('test array with different types', () => {

        const origin = retornaArreglo();
        const [ letters, numbers ] = origin;

        // evaluate value
        expect( letters ).toBe( 'ABC' );
        expect( numbers ).toBe( 123 );

        // evaluate types
        expect( typeof letters ).toBe( 'string');
        expect( typeof numbers ).toBe( 'number');

    });

});