import { useCounter } from "../hooks/useCounter.js";
import { Small } from "./1-1-Small.jsx";
import {useRef, useState} from "react";

export const MemoMethod = () => {

    // VD 132
    const { counter, increment } = useCounter();
    const [ show, setShow ] = useState( true );

    return (
        <>
            <h1>Counter: <Small value={ counter }/></h1>

            <button
                className="btn btn-primary mt-2"
                onClick={ () => increment() }
            >
            +1
            </button>

            <button
                className={ show ?  'btn btn-outline-primary mt-2' :
                                    'btn btn-danger mt-2'}
                onClick={ () => setShow( !show ) }
            >
            Show/Hidden: { JSON.stringify( show ) }
            </button>

            <hr className="lineHr"/>
        </>
    )
}