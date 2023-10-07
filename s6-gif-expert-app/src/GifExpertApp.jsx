// snippet for creating funcComp = rsf

import { useState } from 'react';
import AddCategory from "./components/AddCategory.jsx";
import {GifGrid} from "./components/GifGrid";

const GifExpertApp = () => {

    // it's possible more than one .useState()
    const [ categories, setCategories ] = useState(['Metal Gear'] );

    const onAddCategory = ( newCategory ) => {

        if ( categories.includes( newCategory ) ) return;

        setCategories([ newCategory, ...categories]);
        /* also, it's possible with callback:

            setCategories( categories => {
                return [...categories, 'Oliver y Bengi'];
            });
        */

        // avoid me .push() e.g. categories.push('Oliver y Benji');
    };


    return (
        <>
            <h1>GifExpertApp</h1>

            {
                /*
                VD 80 - the component bellow is the same that:
                <AddCategory onAddCategory = { (value) => onAddCategory(value) } />
                'on...()' this name of method is recommended when there is an event
                */
            }
            <AddCategory onAddCategory={ onAddCategory }/>


            {/* VD 82 2' "return {(...)}" the same "(...) */

                categories.map( category => (
                    <GifGrid
                        // necessary the attr key for React
                        key={ category }
                        category={ category }
                    />
                ))
            }
        </>
    )
};

export default GifExpertApp;