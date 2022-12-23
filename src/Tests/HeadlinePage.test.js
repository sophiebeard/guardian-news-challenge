import { render, screen } from '@testing-library/react';
import HeadlinePage from '../Component/HeadlinePage';
import mockNewsData from '../mockNewsData.json'
import { MemoryRouter } from 'react-router-dom';

describe('HeadlinePage tests', () => {

    it('it should render a headline from the mockNewsData file', () => {

        // Arrange

        // Act
        render(
            <MemoryRouter>
                <HeadlinePage articles={mockNewsData.response.results} />
            </MemoryRouter>);

        // Assert
        expect(screen.getByTestId('headlinePage-test')).toHaveTextContent('Victorian MPs urged to implement integrity reforms before state election after scathing Ibac findings')
    })
})