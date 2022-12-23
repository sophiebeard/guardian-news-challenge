import { render, screen } from '@testing-library/react';
import ArticleSummary from '../Component/ArticleSummary';
import mockNewsData from '../../mockNewsData.json';
import { MemoryRouter } from 'react-router-dom';
import ArticleSummaryPage from '../Component/ArticleSummaryPage';

describe('Article Summary tests', () => {

    it('it should render a headline from props when the headline prop is given', () => {

        // Arrange
        const testHeadline = mockNewsData.response.results[0].fields.headline;

        // Act
        render(<ArticleSummary headline={testHeadline} thumbnail={"string"} bodyText={"string"} />);
        const result = screen.getByText(testHeadline);

        // Assert
        expect(result).toBeInTheDocument();
    })

    it('it should render a thumbnail from props when the thumbnail prop is given', () => {

        // Arrange
        const testThumbnail = mockNewsData.response.results[0].fields.thumbnail;

        // Act
        render(<ArticleSummary headline={"string"} thumbnail={testThumbnail} bodyText={"string"} />);
        const result = screen.getByRole('img');

        // Assert
        expect(result).toHaveAttribute('src', testThumbnail);
    });

    it('it should render bodyText from props when the bodyText prop is given', () => {

        // Arrange
        const testBodyText = mockNewsData.response.results[0].fields.bodyText;

        // Act
        render(<ArticleSummary headline={"string"} thumbnail={"string"} bodyText={testBodyText} />);
        const result = screen.getByText(testBodyText);

        // Assert
        expect(result).toBeInTheDocument();
    })

    it('it should just show one article', () => {

        // Arrange
        const testHeadline = mockNewsData.response.results[0].fields.headline;
        const testThumbnail = mockNewsData.response.results[0].fields.thumbnail;
        const testBodyText = mockNewsData.response.results[0].fields.bodyText;

        // Act
        render(
            <MemoryRouter >
                <ArticleSummary thumbnail={testThumbnail} headline={testHeadline} bodyText={testBodyText} />
            </MemoryRouter >);

        // Assert
        expect(ArticleSummary.length).toBe(1);
    });
});