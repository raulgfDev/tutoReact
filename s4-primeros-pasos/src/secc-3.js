// fichero independiente compia del directorio s3
// se ejecuta con el comando ➜  src git:(main) ✗ node secc-3.js
// this is brief tuto JS.

console.log('Hola mundo!!!');
console.log( 'Otro hola mundo');

const variable = 8;
console.log( variable);

console.log(`This is a template string = ${ variable }`);
console.log(`This is a template string = ${ (variable > 5 ) ? 'Mayor que cinco' : 'Menor que cinco' }`)
const theFunct = nombre => `Hola ${nombre}`;
console.log(`Esto es el retorno de una funcion ${theFunct('rgfDev')}`);

const persona = {
    nombre: 'Pepe',
    age: 20
}

console.log(persona.nombre);
console.log(persona);
//ver el nombre del objeto usar {}
console.log( {persona} );

//vd16 5' asignacion por referencia, NO crea nuevo objeto copia del objeto original,
const persona2 = persona;
//solucion, operador spread, imp en el uso de React
const persona3 = { ...persona };
// también en []
const array = [1, 2, 3];
const copiaArray = [...array, 4];
console.log( copiaArray );

//vd 18
const conReturn = () => {
    return {
        id: 123,
        userName: 'rgfDev'
    }
}
console.log( conReturn() );
// return implicito en arrow funct. con paréntesis
const conParentesis = () => ({
    id: 'ABC',
    userName: 'rfgDev'
    // muy usado en React
});
console.log( conParentesis() );

// vd 19 destructuracion
// docu ofi https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const paramDestructurado = ({nombreUsuario, apellido: unoApellido, edad = 18}) => {
    console.log( nombreUsuario, unoApellido, edad );
}
const objDestruc = {
    nombreUsuario: 'rgf',
    apellido: 'Dev',
    direccion: {
        calle: 'El Pau',
        numero: 45
    }
}
paramDestructurado( objDestruc );

const desectructuracionAnidada = ({apellido, direccion: { calle } }) => {
    console.log( apellido, calle );
}
desectructuracionAnidada( objDestruc );

const arrayParaDestructurar = ['pepe','paco','manu'];
const [ pepe, manu ] = arrayParaDestructurar;
console.log( manu );

// ternario y ternario reducido

const activo = true;

const mensajeUno = ( activo ) ? 'Acceso Permitido' : 'Acceso denegado';
console.log( mensajeUno );
const mensajeDos = activo && 'Acceso Permitido';
console.log( mensajeDos );