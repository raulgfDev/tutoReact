import {getPolice} from "../src/base-pruebas/11-async-await.js";
import {policeToTest} from "../src/data/police.js";

describe('test to file 11-async-await', () => {

    // vd 61
   test('test resolve func. getPolice()', async () => {

       const policeTest = policeToTest;
       const id = 4;
       const police = await getPolice( id );
       expect( police ).toEqual( policeTest );

   });

   // vd 62
   test('test reject func. getPolice()', async () => {
      const id = 1001;
      const police =  await getPolice( id );
      console.log( police );
      expect( police ).toBeFalsy();
   });

});