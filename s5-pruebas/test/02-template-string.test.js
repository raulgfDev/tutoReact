import {getSaludo} from "../src/base-pruebas/02-template-string.js";


describe('To describe code block of test', () => {

   test('this is the name of the test', () => {

       expect( getSaludo('rgfDev') ).toBe( 'Hola rgfDev');

   });

});