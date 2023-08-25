import PropTypes from 'prop-types';// This library isn't necessary with TypeScript

export const ComponentTres = ( { title, subtitle } ) => {

    return (
        <>
            <footer> This is other { title } and this is a { subtitle } </footer>
        </>
    )
}

// flow execution after functComp
ComponentTres.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number
}

ComponentTres.defaultProps  = {
    subtitle: 5
}