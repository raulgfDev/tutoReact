// VD 67 obj screen
// VD 64 the test doesn't work, because it's necessary more config VD 64
// imp VD 68 4' 20''

import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/base-pruebas/14-function-component2.jsx';


describe('Pruebas en <FirstApp />', () => {

    // this scope for all test
    // necessary for testing more flexible
    const title    = 'Hola, Soy Goku';
    const subTitle = 'Soy un subtitulo';

    test('debe de hacer match con el snapshot', () => {

        const { container } = render( <FirstApp title={ title } /> );
        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {

        render( <FirstApp title={ title } /> );
        // methods of the obj screen like handler DOM in JS e.g. getByTest();
        expect( screen.getByText(title) ).toBeTruthy();
        // screen.debug();
    });

    test('debe de mostrar el titulo en un h1', () => {
        render( <FirstApp title={ title } /> );
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );
    });

    test('debe de mostrar el subtitulo enviado por props', () => {

        render(
            <FirstApp
                title={ title }
                subTitle={ subTitle }
            />
        );

        expect( screen.getAllByText(subTitle).length ).toBe(2);

    });


});