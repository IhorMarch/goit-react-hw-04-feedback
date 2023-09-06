import React, { Component } from 'react';
import { FeedbackForm } from './FeedbackForm/FeedbackForm';
import { Section } from './Section/Section';
import { Statistic } from './Statistic/Statistic';
import { Message } from './Message/Message';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  } 



  leaveFeedback = option => {

    this.setState(prevState => ({
    [option]: prevState[option] + 1,

    }));
  };

   totalFeedback = () => {
     const total = this.state.good + this.state.neutral + this.state.bad

    return total
  };
 positiveFeedback = () => {
   const positive = Math.round((this.state.good / this.totalFeedback()) * 100 )|| 0;
  
    return positive
  };
  render() {
    const options = Object.keys(this.state);
    
    return (
      <div>

      <Section title="Please leave feedback">
          
          <FeedbackForm
            leaveFeedback={this.leaveFeedback}
            options={options} />
          
      </Section>
    
        
        <Section title="Statistics">
          {this.totalFeedback() !== 0 ?
            (<Statistic
            good={this.state.good}
            bad={this.state.bad}
            neutral={this.state.neutral}
            total={this.totalFeedback()}
            positive={this.positiveFeedback()}
          />):(<Message message="There is no feedback"/> )
        
        }
        

        </Section>
        <GlobalStyle/>
      </div>
  );
};
}