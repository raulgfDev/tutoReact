// necessary this imp
import React from "react";

// encerrar el fComp dentro del mé. memo para evitar
// su render  cuando sus props no cambien.
export const Small = React.memo(({ value }) => {

    console.log( `value of counter is: ${ value }`);
    return (
        <small>{ value }</small>
    )
});




