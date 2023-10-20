import { useEffect, useState } from "react"
import { Message } from "./2-Message";


export const SimpleForm = () => {

    const [ formState, setFormState ] = useState({
        userName: 'rgfDev',
        email: 'rgfDev@google.com'
    });
    const { userName, email } = formState;

    // VD 120, it's goog to read the questions of this class
    // other convention instead named on...() is handle...() e.g. handleInputChange()
    const onInpuntChange = ({ target }) => {
        // test with console.log( event );
        // remember, desestructuration of obj. = event.target.name
        const { name, value } = target;
        setFormState({
            ...formState,
            // this is a 'computed property', the name property
            // is generate in exe time
            [ name ]: value
        });
    }

    // it's good practique a only useEffect to single task
    // = specialized useEffect = several useEffect
    useEffect(() => {
        console.log('useEffect called!!!')
    }, []); // = dependendy of the useEffect

    useEffect(() => {
        console.log('form changed!!!')
    }, [ formState ]);

    useEffect(() => {
        console.log('email changed!!!')
    }, [ email ]);

    return (
        <>
            <h1>Simple Form</h1>

            <input 
                type="text"
                className="form-control"
                placeholder="User Name"
                name="userName"
                value={ userName }
                onChange={ onInpuntChange }
            />
            <input 
                type="text"
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={ email }
                onChange={ onInpuntChange }
            />

            {
                userName === 'Raul' && <Message />
            }
            <hr className="lineHr"/>
        </>  
    )
}