// snippet for creating funcComp = rsf

import { useState } from 'react';

const GifExpertApp = () => {

    // it's possible more than one .useState()
    const [ categories, setCategories ] = useState(['Metal Gear', 'One Punch'] );

    const onAddCategory = () => {

        setCategories([ ...categories, 'Oliver y Bengi']);
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

            <button onClick={ onAddCategory }>Add Category</button>

            <ol>
                {
                    categories.map( category => {
                        // necessary atr. 'key'
                       return <li key={ category }>{ category }</li>
                    })
                }
            </ol>
        </>
    )
};

export default GifExpertApp;