
import styled from 'styled-components';

const StyledCard = styled.div`
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '20px'};
  background-color: ${(props) => props.bgcolor || '#fff'};
  border-radius: ${(props) => props.borderradius || '8px'};
  border: ${(props) => `2px solid ${props.border}` || 'none'};
  box-shadow: ${(props) => (props.noshadow ? 'none' : '0 4px 8px rgba(0, 0, 0, 0.1)')};
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: ${(props) =>
      props.noshadow ? 'none' : '0 8px 16px rgba(0, 0, 0, 0.2)'};
  }

  @media (max-width: 768px) {
    padding: ${(props) => props.paddingmobile || props.padding || '15px'};
    margin: ${(props) => props.marginmobile || props.margin || '10px'};
  }
`;

const Card = ({ children, ...props }) => {
    return <StyledCard {...props}>{children}</StyledCard>;
  };
  
  export default Card;
