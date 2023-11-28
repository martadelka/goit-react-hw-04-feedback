import React from 'react'

import { useState } from "react";

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = value => {
    switch (value) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        throw new Error();
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedback = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const options = Object.keys({ good, neutral, bad });

  return (
          <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback} 
          />
          {countTotalFeedback() === 0 ?
            <Notification message="There is no feedback"/> :
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedback()}/>
          }
          </Section>
    );
}

console.log('Hello')