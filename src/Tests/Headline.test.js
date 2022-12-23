import { render, screen } from '@testing-library/react';
import Headline from '../Component/Headline';
import mockNewsData from '../../mockNewsData.json';

describe('Headline tests', () => {

    const story = mockNewsData.response.results[0].fields;

    it('it should render a headline from props when the headline prop is given', () => {

        // Arrange
        const testHeadline = story.headline;

        // Act
        render(<Headline headline={testHeadline} thumbnail={"string"} />);
        const result = screen.getByText(testHeadline);

        // Assert
        expect(result).toBeInTheDocument();
    })
});