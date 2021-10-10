import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './feedback.module.css';
import Statistics from './Statistics/statistics';
import FeedbackOption from './FeedbackOptions/feedbackOptions';
import Notification from './Notification/notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  choiceFeedback = ({ target }) => {
    this.setState(prevState => ({
      [target.name]: prevState[target.name] + 1,
    }));
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positiveFeedback = () => {
    const { good, neutral, bad } = this.state;
    if (good === 0) return 0;
    return Math.floor((good / (good + neutral + bad)) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <section className={s.section}>
        <h1>Please leave feedback</h1>
        <FeedbackOption
          option={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.choiceFeedback}
        />
        {this.totalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.totalFeedback()}
            positivePercentage={this.positiveFeedback()}
          />
        )}
      </section>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

Notification.propTypes = {
  message: PropTypes.string,
};

FeedbackOption.propTypes = {
  option: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default Feedback;
