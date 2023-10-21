import { useRef } from "react";

export const FocusScreen = () => {

    const handleClickFirst = () => {
        // use traditional method of manipulation DOM
        // it's possible repeat the id, because is a React component
        const firstInput = document.querySelector('#first-input');
        // select text, instead focus() that only select the elemt.
        firstInput.select();
    }

    // store value not render when update its value
    const inputRef = useRef()
    const handleClickSecond = () => {
        // the value of 'inputRef' assignable for html att. 'ref'
        console.log( inputRef );
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input
                id="first-input"
                type="text"
                placeholder="Your Name"
                className="form-control"
            />
            <button
                className="btn btn-primary mt-2"
                onClick={ handleClickFirst }
            >
                Select
            </button>

            <input
                ref={ inputRef }
                type="text"
                placeholder="Your Name"
                className="form-control mt-2"
            />
            <button
                className="btn btn-primary mt-2"
                onClick={ handleClickSecond }
            >
                Select
            </button>

            <hr className="lineHr"/>
        </>
    )
}