
import {GifItem, Loading} from "./"; // exportancion de barril desde este dir y el fich index.js
import {useFetchGifs} from "../hooks/useFetchGifs.js";




export const GifGrid = ({ category }) => {

    const { images, isLoading, counter, onAddCounter } = useFetchGifs( category );

    if ( isLoading ) return <Loading />
    return (

        // spread operator, syntax right VD 87 5'
        <>
            <h4>{ category }</h4>

            <div className="card-grid">
                {
                    images.map( ( image )  => (
                        <GifItem
                            key={ image.id }
                            { ... image }/>
                    ))
                }
            </div>

            <button onClick={ onAddCounter }>+1</button><span>{ counter }</span>

        </>

    )

}
