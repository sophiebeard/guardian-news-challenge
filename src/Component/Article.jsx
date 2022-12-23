import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
import Headline from './Headline';
import { Link } from 'react-router-dom';

const Article = ({ headline, thumbnail, id }) => {
    return (
        <div className="article" data-testid="article-test">
            <Link to={`/articles/${id}`} >
                <Thumbnail headline={headline} thumbnail={thumbnail} />
                <Headline headline={headline} />
            </Link>
        </div>
    )
}

Article.propTypes = {
    headline: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
}

export default Article;