// vd 44, 45, 46, 47
// info eventos
// https://es.react.dev/reference/react-dom/components/common

import PropTypes from 'prop-types';
import {useState} from "react";



export const ComponentCuatro = ({ value }) => {

    const [ counter, setCounter ] = useState( value );

    const handleAdd = e => {
        console.log('rgfDev');
        console.log( e.screenY );
        console.log( e.target );
        setCounter( counter + 1 );

    }
    // pará can be a callback, callback pará 'c' is current value 'counter'
    const handleSubtract = () => setCounter( ( c ) => c - 1);
    const handleReset = () => setCounter( value );

    // each time change state, exe all component
    // this is imp when ex. we have an asynchronous task or
    // 'create' statement in sql
    // next chapters we'll learn about this
    console.log('other Render');


    return (
        <>
            <h1>Componet 4</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>+ 1</button>
            <button onClick={ handleSubtract }>- 1</button>
            <button onClick={ handleReset }>Reset</button>
        </>
    )
}

ComponentCuatro.propTypes = {
    value: PropTypes.number.isRequired
}
// info eventos
// https://es.react.dev/reference/react-dom/components/common