import { useState } from 'react';
import { FeedbackForm } from './FeedbackForm/FeedbackForm';
import { Section } from './Section/Section';
import { Statistic } from './Statistic/Statistic';
import { Message } from './Message/Message';
import { GlobalStyle } from './GlobalStyle';


// const getIntialFeedbacks = () => {
//   const savedFeedback = localStorage.getItem('feedbacks');
//   if (savedFeedback !== null) {
//     return JSON.parse(savedFeedback);
//   }
//     return {
      
        
//         good: 0,
//         neutral: 0,
//         bad: 0,

   
    
//   };
// };



const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export const App = () => { 

    const [feedbacks, Setfeedbacks] = useState(INITIAL_STATE);
    

    const leaveFeedbacks = key  => {
    Setfeedbacks(prevFeedbacks=> ({
     ...prevFeedbacks,
      [key]: prevFeedbacks[key]+1,
    }));
  };


    const totalFeedback = () => {
       
     const total = feedbacks.good + feedbacks.neutral + feedbacks.bad

    return total
    };
    
 const positiveFeedback = () => {
   const positive = Math.round((feedbacks.good / totalFeedback()) * 100 )|| 0;
  
    return positive
  };

    const options = Object.keys(feedbacks);

    

 return (
     
      <div>

      <Section title="Please leave feedback">
          
          <FeedbackForm
            leaveFeedback={leaveFeedbacks}
            options={options} />
          
      </Section>
    

        <Section title="Statistics">
          {totalFeedback() !== 0 ?
            (<Statistic
            good={feedbacks.good}
            bad={feedbacks.bad}
            neutral={feedbacks.neutral}
            total={totalFeedback()}
            positive={positiveFeedback()}
          />):(<Message message="There is no feedback"/> )
        
        }
        

        </Section>
        <GlobalStyle/>
      </div>
  );
    
    
    

}
