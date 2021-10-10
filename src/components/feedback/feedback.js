import React, { useState } from 'react';
import s from './feedback.module.css';
import Statistics from './Statistics/statistics';
import FeedbackOption from './FeedbackOptions/feedbackOptions';
import Notification from './Notification/notification';

export default function Feedback() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const choiceFeedback = ({ target }) => {
    setState(prevState => ({
      ...prevState,
      [target.name]: prevState[target.name] + 1,
    }));
  };

  const totalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const positiveFeedback = () => {
    const { good, neutral, bad } = state;
    if (good === 0) return 0;
    return Math.floor((good / (good + neutral + bad)) * 100);
  };

  return (
    <section className={s.section}>
      <h1>Please leave feedback</h1>
      <FeedbackOption
        option={['good', 'neutral', 'bad']}
        onLeaveFeedback={choiceFeedback}
      />
      {totalFeedback() === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          total={totalFeedback()}
          positivePercentage={positiveFeedback()}
        />
      )}
    </section>
  );
}
