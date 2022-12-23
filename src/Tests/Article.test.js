import { render, screen } from '@testing-library/react';
import Article from '../Component/Article';
import mockNewsData from '../../mockNewsData.json';
import { MemoryRouter } from 'react-router-dom';

describe('Article tests', () => {

    it('it should render a headline from props when the headline prop is given', () => {

        // Arrange
        const testHeadline = mockNewsData.response.results[0].fields.headline;

        // Act
        render(<MemoryRouter><Article headline={testHeadline} thumbnail={"string"} /></MemoryRouter>);
        const result = screen.getByText(testHeadline);

        // Assert
        expect(result).toBeInTheDocument();
    })

    it('it should render a thumbnail from props when the thumbnail prop is given', () => {

        // Arrange
        const testThumbnail = mockNewsData.response.results[0].fields.thumbnail;

        // Act
        render(
            <MemoryRouter>
                <Article thumbnail={testThumbnail} headline={"string"} />
            </MemoryRouter>);
        const result = screen.getByRole('img');

        // Assert
        expect(result).toHaveAttribute('src', testThumbnail);
    });

    it('it should just show one article', () => {

        // Arrange

        // Act
        render(
            <MemoryRouter >
                <Article thumbnail={"string"} headline={"string"} />
            </MemoryRouter >);

        // Assert
        expect(Article.length).toBe(1);
    });

});