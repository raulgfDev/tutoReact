
export const getPolice = async( id ) => {

    try {
        // go up service
        const resp   = await fetch(`http://localhost:8080/api/${ id }`);
        return await resp.json();

    } catch ( err ) {
        console.log( `${ err } by rgfDev with id ${ id }`);
    }

}




