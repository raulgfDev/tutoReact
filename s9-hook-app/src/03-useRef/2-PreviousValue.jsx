import {useEffect, useRef, useState} from "react";

export const PreviousValue = () => {

    // hooks
    const [ value, setValue ] = useState('');

    // two uses to useRef
    // 1st = reference to value
    const previousValue = useRef("");
    // 2nd = Manipulation the DOM with att. 'ref' in html elemt.
    const inputRef = useRef();

    useEffect( () => {
       previousValue.current = value;

    }, [ value ]);

    // handles
    const handleClickReset = () => {
        setValue("");
        console.log( inputRef.current );
        inputRef.current.value = "";
        inputRef.current.focus();
    }

    return (
        <>
            <h1>Previous Value</h1>

            <input
                type="text"
                ref={ inputRef }
                className="form-control"
                onChange={ (e) => setValue(e.target.value) }
            />

            <br />
            <p>Current Value: { value }</p>
            <p>Previous Value: { previousValue.current }</p>

            <button
                className="btn btn-primary mt-2"
                onClick={ handleClickReset }
            >
            Reset Current
            </button>

            <hr className="lineHr"/>
        </>






    )
}