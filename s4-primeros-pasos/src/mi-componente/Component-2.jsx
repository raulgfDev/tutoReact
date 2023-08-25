
// props is a obj, it can destructuring
export const ComponentDos = ( { footer = 'the foot page', numero } ) => {

    return (
        <footer>This is the  { footer } and this is a { numero } </footer>
    )
}