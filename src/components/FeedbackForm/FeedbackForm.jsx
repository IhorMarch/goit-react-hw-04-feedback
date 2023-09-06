import { FeedBackBtns } from '../FeedBackBtns/FeedBackBtns';
import { List} from './FeedbackForm.styled';
import PropTypes from 'prop-types';




export const FeedbackForm = ({options,leaveFeedback}) => {
    return (
        <List>
            {options.map(option => (
                
                <FeedBackBtns key={option} option={option} leaveFeedback={leaveFeedback} />
            ))}
              
        </List>
  );
};


FeedbackForm.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  leaveFeedback: PropTypes.func.isRequired,
};