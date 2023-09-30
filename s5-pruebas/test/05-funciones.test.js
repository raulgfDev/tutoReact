
// Vd 57
// only exe test for one file, cmd 'yarn test'intro  and
// 'p' and name of file
import {getUsuarioActivo} from "../src/base-pruebas/05-funciones.js";

describe('Test 05-funciones file', () => {

    const aObject = {
        uid: 'ABC567',
        username: 'ismael'
    };
    console.log( aObject );

   test('test objects', () => {
       // In this case is necessary to use .toEqual() or .toStrictEqual()
       // because in primitives types .toBe() evaluate the values, but an
       // obj. evaluate the reference ( point of memory ) instead values.
       expect( getUsuarioActivo('ismael') ).toEqual( aObject );
   }) ;

});