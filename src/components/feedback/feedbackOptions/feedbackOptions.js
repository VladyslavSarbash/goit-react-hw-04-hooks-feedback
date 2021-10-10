import shortid from 'shortid';
import s from './feedbackOption.module.css';

export default function FeedbackOption({ option, onLeaveFeedback }) {
  // const { good, neutral, bad } = onLeaveFeedback;
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
