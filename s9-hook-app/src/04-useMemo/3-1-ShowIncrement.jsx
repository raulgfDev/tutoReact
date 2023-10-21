import React from 'react';

// necessary use method React.memo()
export const ShowIncrement = React.memo(
    // exe increment f. but not the .log()
    ({ increment }) => {

        // this .log() can be exe other thing
        // then violation of single-responsibility principle
        // of this component
        console.log('I executed');

        return (
            <button
                className="btn btn-primary"
                onClick={ () => increment( 5 ) }
            >
                + 5
            </button>
        )
    }
)