// useEffect cleanup when desmount the component
// VDS 122 123, it is implement the other file 'SimpleForm'
import { useEffect, useState } from "react"

export const Message = () => {

    const [ coords, setCoords ] = useState( {
        x: 0,
        y: 0,
    });


    useEffect( () => {

        // x and y of the 'event'
        const handleMouseMove = ({ x, y }) => {
            setCoords({ x, y });
        }
        // this is an observer, 2nd arg is a callback with the event param.
        // ( event ) => handleMouseMove( event ); it's is rebundant
        window.addEventListener('mousemove', handleMouseMove );
       
        // this is the cleanup of the 'useEffect'
        return () => {
            window.removeEventListener('mousemove', handleMouseMove );
        }

    }, []);

    return (
        <>
            <h1>Usuario existente</h1>
            { JSON.stringify( coords ) }
        </>
    )
}