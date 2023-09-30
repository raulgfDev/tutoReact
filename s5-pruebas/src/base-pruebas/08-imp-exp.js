// import { heroes } from './data/heroes';

import heroes from '../data/heroes'; // this is a default export, different previous

export const getHeroeById = ( id ) => heroes.find( (heroe) => heroe.id === id );

export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );



