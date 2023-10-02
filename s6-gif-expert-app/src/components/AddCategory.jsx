import {useState} from "react";

const AddCategory = ({ setCategories }) => {

    const [ inputValue, setInputValue ] = useState( '' );

    const onInputChange = ( event ) => {
        setInputValue( event.target.value );
    };

    const onSubmit = ( event ) => {
        event.preventDefault();
        if ( inputValue.trim().length <= 1 ) return;
        setCategories( categories => [ inputValue, ...categories ]);
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
        </form>

    )
};

export default AddCategory;