import { render, screen } from '@testing-library/react';
import Thumbnail from '../Component/Thumbnail';
import mockNewsData from '../mockNewsData.json';

describe('Thumbnail tests', () => {

    const story = mockNewsData.response.results[0].fields;

    it('it should give the correct headline when the headline prop is given', () => {

        // Arrange
        const testHeadline = story.headline;

        // Act
        render(<Thumbnail thumbnail={"string"} headline={testHeadline} />);
        const result = screen.getByRole('img');

        // Assert
        expect(result).toHaveAttribute('alt', testHeadline);
    });

    it('it should give the correct photo when the thumbnail prop is given', () => {

        // Arrange
        const testThumbnail = story.thumbnail;

        // Act
        render(<Thumbnail thumbnail={testThumbnail} headline={"string"} />);
        const result = screen.getByRole('img');

        // Assert
        expect(result).toHaveAttribute('src', testThumbnail);
    });
});