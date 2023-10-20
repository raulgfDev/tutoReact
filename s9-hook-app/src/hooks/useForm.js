import { useState } from "react"

// cH reusable for the param.
// also there are lib' with cH for working with form e.g.
// https://react-hook-form.com
export const useForm = ( initialForm = {} ) => {

    const [ formState, setFormState ] = useState( initialForm );

    const handleInputChange = ({ target }) => {
        const { name, value, id } = target;
        //console.log( name, value, id );
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const handleSubmit = ( event, userName, email ) => {
        event.preventDefault();
        console.log(`I am ${ userName } and my email is ${ email }`);
        // VD 125 reset form
        setFormState( initialForm );
    }

    return {
        formState,
        handleInputChange,
        handleSubmit,
    }


}