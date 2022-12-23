import { render } from '@testing-library/react';
import Header from '../Component/Header';

test(`Header snapshot test`, () => {

    // Arrange
    const headerComponent = render(<Header />);

    //Act

    //Assert
    expect(headerComponent).toMatchSnapshot();
});