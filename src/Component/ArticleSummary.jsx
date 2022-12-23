import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
import Headline from './Headline';
import BodyText from './BodyText';

const ArticleSummary = ({ headline, thumbnail, bodyText, url }) => {
    return (
        <div className="articleSummary" data-testid="articleSummary-test">
            <div className="thumbnail">
                <Thumbnail headline={headline} thumbnail={thumbnail} />
            </div>
            <br />
            <div className="headline">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <Headline headline={headline} />
                </a>
            </div>
            <br />
            <div className="bodyText">
                <BodyText bodyText={bodyText} />
            </div>
        </div>
    )
}

ArticleSummary.propTypes = {
    headline: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired
}

export default ArticleSummary;