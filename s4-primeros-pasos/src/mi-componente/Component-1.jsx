
import './Component-1.css'

//it is the same, in or out of the funct component
// the scope it is the same, it's better out
const dentroOFuera = 'rgfDev'

// funct. it's better out the comp.
const unaFunct = ( a, b ) => a + b;

// != file App.jsx, here with arrow funct.
export const Component1 = (props ) => {

    const dentro = 'Hola Mundo';

    return (//parantesis opticonales, varios elemt html fragment = <>...</>
        <>
            <h2>{ dentro } by { dentroOFuera }, esto es una props = { props.paraH2 }</h2>
            <p><strong> { unaFunct(1, 3) }</strong></p>
            <button id="idButton">{ props.nameButton }</button>
        </>
    )
}