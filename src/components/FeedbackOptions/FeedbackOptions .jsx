import PropTypes from 'prop-types';
import { FeedbackOptionsBtn } from './FeedbackOptions.styled';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsBtn>
      {options.map(option => (
        <button
          type="button"
          key={option}
          value={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </FeedbackOptionsBtn>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
