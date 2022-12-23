import PropTypes from 'prop-types';

const Thumbnail = ({ headline, thumbnail }) => {
    return (
        <div className="thumbnail">
            <img src={thumbnail} alt={headline}></img>
        </div>
    );
};

export default Thumbnail;

Thumbnail.propTypes = {
    headline: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
};