import {useState} from "react";

const AddCategory = ({ onAddCategory }) => {

    const [ inputValue, setInputValue ] = useState( '' );

    const onInputChange = ( event ) => {
        setInputValue( event.target.value );
    };

    const onSubmit = ( event ) => {
        event.preventDefault();
        if ( inputValue.trim().length <= 1 ) return;
        onAddCategory( inputValue.trim() );
        setInputValue('');
    };

    // only one elemt root = form, others are child
    return (
        // the following callback could be 'onSubmit' without 'event'
        <form onSubmit={ (event ) => onSubmit( event )}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />

            <input
                type="submit"
                value="Add"
            />
        </form>
    )
};

export default AddCategory;