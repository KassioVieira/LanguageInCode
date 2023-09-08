import styled from 'styled-components/native';
import colors from '../../values/colors';

export const WrapperBottom = styled.View`
  width: 100%;
  height: 40px;
  background-color: ${colors.primary};
  justify-content: center;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  align-items: center;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
`;
