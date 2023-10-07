import {useEffect, useState} from "react";
import {getGifs} from "../helpers/getGifs.js";

// this is a custom hook, to use for naming "use...()" is a convention.
// it doesn't return jsx format, the extension of the file is .js
export const useFetchGifs = ( category ) => {

    // useState(), at the start of the fC
    const [ images, setImages ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( true );
    const [ counter, setCounter ] = useState( 1 );

    // out the hook 'useEffect' because it's an asyn funct.
    // callback useEffect cannot be asyn directly
    /*
    this is wrong:
    useEffect( () =>  {
        getGifs( category )
    }, [ ]);
    */
    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading( false );
    }
    useEffect( () => {
        getImages();
    }, [])

    useEffect( () => {
        document.title = `Contador: ${ counter }`
    }, [ counter ]);

    function onAddCounter() {
        setCounter( counter + 1);
    }

    return {
        // remember rebundance images: images
        images,
        isLoading,
        counter,
        onAddCounter
    }
}