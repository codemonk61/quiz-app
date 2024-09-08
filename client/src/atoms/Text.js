import styled from 'styled-components';

const Text = styled.p`
  margin-top: ${(props) => props.mt || '0'};
  margin-bottom: ${(props) => props.mb || '0'};
  margin-left: ${(props) => props.ml || '0'};
  margin-right: ${(props) => props.mr || '0'};
  font-size: ${(props) => props.fontSize || '16px'};
  color: ${(props) => props.color || 'black'};
  line-height: ${(props) => props.lineHeight || 'normal'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
`;

export default Text;
