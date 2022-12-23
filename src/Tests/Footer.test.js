import { render } from '@testing-library/react';
import Footer from '../Component/Footer';

test(`Footer snapshot test`, () => {

    // Arrange
    const footerComponent = render(<Footer />);

    //Act

    //Assert
    expect(footerComponent).toMatchSnapshot();
});