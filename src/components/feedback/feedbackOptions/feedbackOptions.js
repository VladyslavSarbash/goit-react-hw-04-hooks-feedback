import shortid from 'shortid';
import PropTypes from 'prop-types';
import s from './feedbackOption.module.css';

export default function FeedbackOption({ option, onLeaveFeedback }) {
  return (
    <div>
      {option.map(i => {
        return (
          <button
            key={shortid.generate()}
            className={s.button}
            name={i}
            type="button"
            onClick={onLeaveFeedback}
          >
            {i}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOption.propTypes = {
  option: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
