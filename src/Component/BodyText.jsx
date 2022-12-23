import PropTypes from 'prop-types';
import './CSS/BodyText.css';

const BodyText = ({ bodyText }) => {
    return (
        <div className="bodyText">
            <p>{bodyText}</p>
        </div>
    );
};

export default BodyText;

BodyText.propTypes = {
    bodyText: PropTypes.string.isRequired,
};