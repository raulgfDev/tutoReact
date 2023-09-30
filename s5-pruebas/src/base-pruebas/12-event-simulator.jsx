// remember, the extension of the file it's the same .js or .jsx
// .js can include sintaxis the .jsx
import { useState } from 'react';

export default function CheckboxWithLabel({ labelOn, labelOff }) {

    const [ isChecked, setIsChecked ] = useState(false);

    const onChange = () => {
        setIsChecked( !isChecked );
    };

    return (
        <label>
            <input type="checkbox" checked={ isChecked } onChange={ onChange } />
            { isChecked ? labelOn : labelOff }
        </label>
    );
}