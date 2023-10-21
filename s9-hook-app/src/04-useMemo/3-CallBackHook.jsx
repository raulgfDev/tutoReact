import {useCallback, useState} from "react";
import { ShowIncrement } from "./3-1-ShowIncrement.jsx";

// VD 134
export const CallBackHook = () => {

    const [ counter, setCounter ] = useState( 100 );

    // like this, not memorize
    // const incrementFromFather = () => {
    //     setCounter( counter + 1 );
    // }

    const incrementFromFather = useCallback( ( quantityIncrement ) => {
        // not work 'setCounter( counter + 1 )'
        setCounter( counter => counter + quantityIncrement );
    },[] );

    return (
        <>
            <h1>The value of counter is: { counter }</h1>
            <ShowIncrement increment={ incrementFromFather }/>
            <hr className="lineHr"/>
        </>
    )
}