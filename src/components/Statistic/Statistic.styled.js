import styled from 'styled-components';



export const List = styled.ul`
display: flex;
flex-direction:column;
    gap: 20px;
    margin-top:20px;
    margin-bottom:20px;

`;

export const Item = styled.li`
 font-weight: 600;
 font-size: 24px;
 text-align:center;

`;



export const Span = styled.span`
 font-weight: 16px;
 font-size: 24px;
 text-align:center;
 
 color: ${props => props.count >"80" ? props.theme.colors.green : props.theme.colors.red};


`;
