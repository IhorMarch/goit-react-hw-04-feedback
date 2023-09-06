import PropTypes from 'prop-types';
import { Text } from './Message.styled';

export const Message = ({ message }) => {
  return <Text>{message}</Text>;
};



Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

