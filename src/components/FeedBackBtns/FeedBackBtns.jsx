
import PropTypes from 'prop-types';
import { Item,Button} from './FeedbackBtns.styled';

export const FeedBackBtns = ({ option, leaveFeedback }) => {

  const splitted = option.split("")
  const first = splitted[0].toUpperCase()
  const rest = [...splitted]
  rest.splice(0, 1)
  const result = [first, ...rest].join("")

  return (<Item>
      
        <Button type="button" bcgcolour={option} key = {option} onClick={() => leaveFeedback(option)}>{result}</Button>
       </Item>
  );
};

FeedBackBtns.propTypes = {
  option: PropTypes.string.isRequired,
  leaveFeedback: PropTypes.func.isRequired,
};