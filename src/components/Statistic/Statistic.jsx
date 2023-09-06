import PropTypes from 'prop-types';
import { List, Item,Span} from './Statistic.styled';
export const Statistic = ({good,bad,neutral,total,positive}) => {
    return (
        <List>
            <Item>Good: {good}</Item>
            <Item>Neutral: {neutral}</Item>
            <Item>Bad: {bad}</Item>
            <Item>Total: {total}</Item>
            <Item>Positive feedback: <Span count={positive}>{positive}%</Span></Item>
        </List>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};