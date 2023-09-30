import {getHeroeById, getHeroesByOwner} from "../src/base-pruebas/08-imp-exp.js";

describe( 'Testing 08-imp-exp file', () => {

    test( 'testing funct 1', () => {
        const heroeForId = getHeroeById( 3 );
        expect( heroeForId ).toEqual({
            id: 3,
            name: 'Superman',
            owner: 'DC'
        });
    });

    test('testing funct 2', () => {
        const heroesForOwner = getHeroesByOwner( 'DC');
        expect( heroesForOwner.length ).toBe( 3 );
    });

});

