import { useState } from "react"

// this is a good example, but it's better several useState() instead a obj
export const CounterApp = () => {
    
    // destructuracion del obj. del estado inicial
    const [ { counter1, counter2, counter3 }, setCounter ] = useState( {
        counter1: 10,
        counter2: 20,
        counter3: 30,

    });
    // setCounter( counter1 + 1) =  the entire state gets overwritten
    // solution = spreading the previousState and overwriting only the counter1.
    const updateCounter1 = () => {
        setCounter( ( previusState ) => {
            return { ...previusState, counter1: counter1 + 5 }
        }
    )};

    return (

        <>
            <p>counter1 = { counter1 }</p>
            <p>counter2 = { counter2 }</p>
            <p>counter3 = { counter3 }</p>

            <button onClick={ updateCounter1 }>+ 5 counter1</button>

            <hr className="lineHr"/>
        </>
    )
}