// necessary add React Testing library with the next command
// yarn add --dev @testing-library/react
// VD 64 the test doesn't work, because it's necessary more config VD 64

// the extension file it's the same .js or .jsx

import {cleanup, fireEvent, render} from '@testing-library/react';
import CheckboxWithLabel from '../src/base-pruebas/12-event-simulator.jsx';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('CheckboxWithLabel changes the text after click', () => {

    // mé render() return an object with some props. and functs.
    // like are the 'queryByLabelText()' and 'getByLabelText()'
    // these mé { with JS and DOM e.g. 'getElementById()'
    const { queryByLabelText, getByLabelText } = render(
        <CheckboxWithLabel labelOn="On" labelOff="Off" />,
    );

    expect( queryByLabelText(/off/i) ).toBeTruthy();

    fireEvent.click( getByLabelText(/off/i) );

    expect( queryByLabelText(/on/i) ).toBeTruthy();
});
