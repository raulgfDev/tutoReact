import { useCounter } from "../hooks/useCounter.js";

import {useMemo, useState} from "react";

// out fC
const heavyTask = ( iteraciones = 1000 ) => {
    for ( let i = 0; i < iteraciones; i++ ) {
        console.log('heavy Task...');
    }
    return `${ iteraciones } iteraciones realizadas`;
}

export const MemoHook = () => {

    // VD 133
    const { counter, increment } = useCounter( 4000 );
    const [ show, setShow ] = useState( true );

    // se exe el callback solo cuando cambia la dependencia, es decir,
    // counter, btn ShowHidden no dispara el mé heavyTask.
    const memorizedValue = useMemo( () => heavyTask( counter ),
        [ counter ]);

    return (
        <>
            <h1>Counter: <small>{ counter }</small> </h1>
            <h4> { memorizedValue }</h4>
            <button
                className="btn btn-primary mt-2"
                onClick={ () => increment() }
            >
                +1
            </button>

            <button
                className={ show ?  'btn btn-outline-primary mt-2' :
                    'btn btn-outline-danger mt-2'}
                onClick={ () => setShow( !show ) }
            >
                Show/Hidden: { JSON.stringify( show ) }
            </button>

            <hr className="lineHr"/>
        </>
    )
}