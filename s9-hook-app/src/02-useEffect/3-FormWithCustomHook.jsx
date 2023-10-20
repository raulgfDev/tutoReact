import { useForm } from "../hooks/useForm";
import { ClassFormWithCustomHook } from "../classes/ClassFormWithCustomHook";

export const FormWithCustomHook = () => {

    const aObj = new ClassFormWithCustomHook('','','');
    // const literalObj = {
    //     userName: 'Pepe',
    //     email: '',
    //     password: ''
    // }

    // cHook
    const { formState, handleSubmit, handleInputChange } = useForm( aObj );

    // this step destructuring is necessary
    const { userName, email, password } = formState;

    return (
        <>
            <h1>Form With Custom Hook</h1>

            <form onSubmit={ ( event ) => handleSubmit( event, userName, email ) }>

                <input
                    id="una-prueba"
                    type="text"
                    className="form-control"
                    placeholder="User Name"
                    name="userName"
                    value={ userName }
                    onChange={ handleInputChange }
                    autoComplete="off"
                />
                {
                    // above it's the same that 'onChange={ event => handleInputChang( event ) }
                }
                <input 
                    type="text"
                    className="form-control mt-2"
                    placeholder="Email"
                    name="email"
                    value={ email }
                    onChange={ handleInputChange }
                    autoComplete="off"
                />
                <input 
                    type="password"
                    className="form-control mt-2"
                    placeholder="Password"
                    name="password"
                    value={ password  }
                    onChange={ handleInputChange }
                    autoComplete="off"
                />
                <input
                    type="submit"
                    className="btn btn-primary mt-2"
                />
                
            </form>


            <hr className="lineHr"/>
        </>  
    )
}