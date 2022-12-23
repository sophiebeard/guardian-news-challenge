import PropTypes from 'prop-types';

const Headline = ({ headline }) => {
    return (
        <div className="headline">
            <h2>{headline}</h2>
        </div>
    );
};

export default Headline;

Headline.propTypes = {
    headline: PropTypes.string.isRequired,
};