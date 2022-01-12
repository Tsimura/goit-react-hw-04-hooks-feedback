import React, { Component } from 'react';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions ';
import Notification from '../Notification/Notification';
import Statistics from '../Statistics/Statistics';
import { FeedbackWrapper } from './Feedback.styled';
class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  clickBtn = event => {
    this.setState(prevState => ({
      [event]: prevState[event] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback()) || 0;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const totalValue = this.countTotalFeedback();
    const countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage();
    return (
      <FeedbackWrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.clickBtn}
          />
        </Section>
        <Section title="Statistics">
          {totalValue ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalValue}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </FeedbackWrapper>
    );
  }
}
export default Feedback;
