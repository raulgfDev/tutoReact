import {getHeroeById} from "./08-imp-exp.js";

export const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () =>  {
            const p1 = getHeroeById( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( `No se puede encontrar el héroe ${ id }` );
            }
        }, 1000 )
    
    });
}
