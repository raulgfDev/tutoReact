//convention the word use... for your cumtom Hooks = cH

import { useState } from "react"

export const useCounter = ( initialValue = 10 ) => {

    const [ counter, setCounter ] = useState( initialValue );

    const increment = ( value = 1 ) => {
        setCounter( counter + value );
    }
    const decrement = () => {
        // cH with own bussinnes logic, instead out fComponent.
        if( counter === 0 ) return;
        setCounter( counter - 1 );
    }
    const reset = () => {
        setCounter( initialValue );
    }

    // VD 118 5' the teacher choose return a obj, because it's better 
    // when use this hook desestructuraion chosing 
    return {
        counter,
        increment,
        decrement,
        reset
    }
 

}