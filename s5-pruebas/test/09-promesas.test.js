import { getHeroeByIdAsync } from "../src/base-pruebas/09-promesas.js";

describe('test the resolve and reject', () => {

   // vd 60 pará. done to transform asyn to sycro
   test('test the resolve', ( done ) => {

      const id = 2;
      getHeroeByIdAsync( id )
          .then( resp => {
             console.log( resp );
             expect( resp ).toEqual(  {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
             });
             done(); // done(), dentro del .then()
          });
   });

   // remember pará. done, other way to test with the asyn-await, it'll watch next vd
   test('test the reject', (done) => {

      const id = 43; // it doesn't exist with this id, then test ok
      getHeroeByIdAsync( id )
          .catch( err => {
             console.log( err )
             done(); // for working, it's necessary inside the catch block
          });
   });

});

