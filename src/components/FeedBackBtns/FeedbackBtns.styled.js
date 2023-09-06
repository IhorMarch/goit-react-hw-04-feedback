import styled from 'styled-components';



export const Item = styled.li`
display: flex;
    gap: 20px;

`;

const getStatusColor = props => {
  switch (props.bcgcolour) {
    case "good":
      return props.theme.colors.green;
    case "bad":
      return props.theme.colors.red;
      case "neutral":
      return props.theme.colors.orange;
    default:
      return null;
  }
};


export const Button = styled.button`
    margin-left: 15px;
    font-size: 18px;
    font-weight: 700;
    border-radius: 10%;
    padding:5px;
    /* background: ${props => props.bcgcolour ==="bad" ? props.theme.colors.red : props.theme.colors.green}; */
    background:${getStatusColor}
 

`;