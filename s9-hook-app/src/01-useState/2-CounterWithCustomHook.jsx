import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    // custom hook
    const { counter,
            increment,
            decrement,
            reset } = useCounter();
    
    
     // VD 119 6' ( event ) => increment( 15 )
     // if I don't use the 'event' can ommite it
    return (
        <>
            <h1>Counter with Hook: { counter }</h1>
            <hr />
            
            <button className="btn btn-primary" onClick={ () => increment( 15 ) }>+1</button>
            <button className="btn btn-primary" onClick={ reset }>Reset</button>
            <button className="btn btn-primary" onClick={ decrement }>-1</button>

            <hr className="lineHr"/>
        </>
    )
}