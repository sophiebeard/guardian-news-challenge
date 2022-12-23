import { render, screen } from '@testing-library/react';
import BodyText from '../Component/BodyText';
import mockNewsData from '../../mockNewsData.json';

describe('BodyText tests', () => {

    const story = mockNewsData.response.results[0].fields;

    it('it should render bodyText from props when the bodyText prop is given', () => {

        // Arrange
        const testBodyText = story.bodyText;

        // Act 
        render(<BodyText bodyText={testBodyText} />);
        const result = screen.getByText(testBodyText);

        // Assert
        expect(result).toBeInTheDocument;
    })
});